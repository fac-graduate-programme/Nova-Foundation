import React, { useState, useEffect } from "react";
import "./style.css";
import PoemList from "./PoemList";
import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";

const Poems = props => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading) {
      fetch("/api/v1/poems")
        .then(res => res.json())
        .then(({ data, error }) => {
          if (error) setError("Something Error Please Try Again");
          else setPoems(data);
          setLoading(true);
        })
        .catch(() => {
          setError("Something Error Please Try Again");
        });
    }
  });
  return (
    <div>
      <Header />
      {error && <p className="error">{error}</p>}
      {loading ? (
        <>
          <PoemList poems={poems} {...props} />
          <div className="poem-buttons">
            <Button
              className="large-back__button"
              name="Back"
              onClick={() => props.history.goBack()}
            />
            <Button className="register__button" name="More Poems" />
          </div>
        </>
      ) : null}
      <Footer />
    </div>
  );
};

export default Poems;
