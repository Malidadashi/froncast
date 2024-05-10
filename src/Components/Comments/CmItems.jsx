import React from "react";
import "./cmitems.css";
const CmItems = ({ name, picture, comment }) => {
  return (
    <div className="cm-items">
      <div className="cm-items-title">
        <img src={picture} alt="cm-img" className="cm-items-img" />
        <h4 className="cm-items-name"> {name}</h4>
      </div>
      <div>
        <p className="cm-items-comment">{comment}</p>
      </div>
    </div>
  );
};

export default CmItems;
