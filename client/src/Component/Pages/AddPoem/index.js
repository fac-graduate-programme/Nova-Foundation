import React from "react";
import Header from "../../CommonComponent/Header";
import Input from "../../CommonComponent/Input";
import Footer from "../../CommonComponent/Footer";
import TextArea from "../../CommonComponent/Textarea";
import Button from "../../CommonComponent/Button";

import "./style.css";

const AddPoem = props => {
  const [title, setTitle] = React.useState("");
  const [poem, setPoem] = React.useState("");
  const [error, setError] = React.useState(false);
  const [fetchError, setFetchError] = React.useState(false);
  const [buttonContent, setButtonContent] = React.useState("Save");

  const message = {
    default: "Please add a title and add a poem",
    fetch: "Sorry something went wrong, Please try again"
  };

  const handleSubmit = e => {
    e.preventDefault();

    if ((title === "") | (poem === "")) {
      setError(true);
    } else {
      setError(false);

      setButtonContent("Loading...");

      fetch("/api/v1/poems", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          data: { title: title, poem: poem }
        })
      })
        .then(response => response.json())
        .then(data => {
          props.history.push("/poems");
        })
        .catch(error => {
          setButtonContent("Save");
          setFetchError(true);
        });
    }
  };

  return (
    <>
      <Header {...props} />
      <main className="add-poem-page">
        <section className="add-poem__section">
          <h2 className="add-poem__title">Add a Poem</h2>
          <form className="add-poem__form">
            <Input
              id="new-poem__title"
              placeholder="Title here..."
              label="Add a Title"
              type="text"
              action={e => {
                setTitle(e.target.value);
              }}
            />

            <TextArea
              id="new-poem__text"
              placeholder="Type here..."
              label="Add a Poem"
              type="text"
              action={e => setPoem(e.target.value)}
            />
            {error && <p className="add-poem__error">{message.default}</p>}

            {fetchError && <p className="add-poem__error">{message.fetch}</p>}
            <div className="add-poem__form__button">
              <Button
                name="Back"
                onClick={() => props.history.push("/poems")}
                className="large-skip__button"
              />
              <Button
                name={buttonContent}
                onClick={handleSubmit}
                className="large-save__button"
                type="submit"
              />
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AddPoem;
