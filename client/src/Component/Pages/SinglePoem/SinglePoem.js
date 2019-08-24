import React from "react";

import "./style.css";

const SinglePoem = poem => {
  return (
    <div className="poems-container">
      <div className="poems__header">
        <h1 className="poems-page__title">Poem</h1>
      </div>

      {poem.length ? (
        poem.map((poem, index) => (
          <div className="poems-box" key={index}>
            <h4 className="poem-title">{poem.title}</h4>

            {poem.content}
          </div>
        ))
      ) : (
        <p>You don't have any poems</p>
      )}
    </div>
  );
};

export default SinglePoem;
