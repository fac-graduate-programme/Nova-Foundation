import React from "react";
import ReadMoreAndLess from "react-read-more-less";

import AddIcon from "../../CommonComponent/AddIcon";
import "./style.css";

const PoemList = ({ poems, ...rest }) => {
  return (
    <div className="poems-container">
      <div className="poems__header">
        <h1 className="poems-page__title">All Poems</h1>
        <AddIcon onClick={() => rest.history.push("/add-poem")} />
      </div>
      {poems.length ? (
        poems.map((poem, index) => (
          <div className="poems-box" key={index}>
            <h4 className="poem-title">{poem.title}</h4>

            <ReadMoreAndLess
              className="poems-body"
              charLimit={50}
              readMoreText="Read More"
              readLessText="Read less"
            >
              {poem.content}
            </ReadMoreAndLess>
          </div>
        ))
      ) : (
        <p>You don't have any poems</p>
      )}
    </div>
  );
};

export default PoemList;
