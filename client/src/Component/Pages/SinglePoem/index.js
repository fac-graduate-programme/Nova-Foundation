import React from "react";
import "./style.css";
import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";
// import SinglePoem from "../SinglePoem";

const Poem = props => {
  return (
    <div>
      <Header />

      <div className="poem-buttons">
        <Button
          className="large-back__button"
          name="Back"
          onClick={() => props.history.goBack()}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Poem;
