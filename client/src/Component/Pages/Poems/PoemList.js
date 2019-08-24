import React from "react";
import ReadMoreReact from "read-more-react";

import AddIcon from "../../CommonComponent/AddIcon";
import "./style.css";

const PoemList = ({ poems, ...rest }) => {
  // const [state, setState] = useState(false);

  // const toggle = () => {
  //   state = {
  //     on: false
  //   };
  //   this.setState({
  //     on: !this.state.on
  //   });
  // };

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
            <ReadMoreReact
              text={poem.content}
              min={90}
              ideal={100}
              max={200}
              readMoreText="...Read More"
              onClick={() => rest.history.push("/single-poem")}
            />
          </div>
        ))
      ) : (
        <p>You don't have any poems</p>
      )}
    </div>
  );
};

export default PoemList;
