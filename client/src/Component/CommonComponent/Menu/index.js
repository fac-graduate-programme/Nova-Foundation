import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

import "react-notifications-component/dist/theme.css";

import "./style.css";

class Menu extends Component {

  notificationDOMRef = React.createRef();

  notification = (type, message) => {
    this.notificationDOMRef.current.addNotification({
      message,
      type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }

  handleClick = value => e => {
    if (value === "/logout") {
      fetch("/api/v1/logout")
        .then(res => res.json())
        .then(({error, data}) => {
          if(error) {
            this.notification('warning', error)
          } else {
            this.props.history.push('/');
          }
        })
        .catch(() => {
          this.notification('danger', 'Server Error Can\'t Logout');
        });
    } else {
      this.props.history.push(value);
    }
  };
  render() {
    const { isLogged } = this.props;
    if (isLogged)
      return (
        <div className="menu">
          <li onClick={this.handleClick("/home")} className="menu__item">
            NOVA HOME
          </li>
          <li onClick={this.handleClick("/information")} className="menu__item">
            NOVA INFORMATION
          </li>
          <li onClick={this.handleClick("/stories")} className="menu__item">
            NOVA STORIES
          </li>
          <li
            onClick={this.handleClick("/personal-space")}
            className="menu__item"
          >
            MY PERSONAL CORNAER
          </li>
          <li onClick={this.handleClick("/logout")} className="menu__item">
            LOGOUT
          </li>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
      );

    return (
      <div className="menu">
        <li onClick={this.handleClick("/")} className="menu__item">
          NOVA HOME
        </li>
        <li onClick={this.handleClick("/login")} className="menu__item">
          LOGIN
        </li>
        <li onClick={this.handleClick("/register")} className="menu__item">
          SIGN UP
        </li>
      </div>
    );
  }
}

export default Menu;
