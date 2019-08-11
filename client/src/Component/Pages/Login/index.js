import React, { Component } from "react";

import Header from "../../CommonComponent/Header";
import Input from "../../CommonComponent/Input";
import Button from "../../CommonComponent/Button";

import "./style.css";

export default class Login extends Component {
  state = {
    email: {
      value: "",
      error: ""
    },
    password: {
      value: "",
      error: ""
    }
  };
  handleInput = e => {
    let { name, value } = e.target;
    if (name === "email") value = value.trim();
    if (!value)
      this.setState({ [name]: { error: `please fill the ${name} field` } });
    else this.setState({ [name]: { value } });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email.value || !password.value) {
      const emailError = email.value ? "" : "please fill the email field";
      const passwordError = password.value ? "" : "please fill the password field";
      this.setState(prev => {
        return {
          email: { ...prev.email, error: emailError },
          password: { ...prev.password, error: passwordError }
        };
      });
      return;
    } else {
      fetch("/api/v1/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          data: { email: email.value, password: password.value }
        })
      })
        .then(res => res.json())
        .then(res => {

        })
        .catch(() => {
            
        });
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        <Header isLogged={false} />
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <h1 className="login__header">Please Login</h1>
            <Input
              id="email"
              label="Your email"
              placeholder="Email"
              type="email"
              action={this.handleInput}
            />
            {email.error && <p className="login__error">{email.error}</p>}
            <Input
              id="password"
              label="Your password"
              placeholder="Password"
              type="password"
              action={this.handleInput}
            />
            {password.error && <p className="login__error">{password.error}</p>}
            <Button
              name="Login"
              className="register__button login__btn"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </>
    );
  }
}
