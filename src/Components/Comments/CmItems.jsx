import React from "react";
import "./cmitems.css";
const CmItems = ({ name, picture, comment }) => {
  return (
    <div className="cm-items">
      <img src={picture} alt="cm-img" className="cm-items-img" />

      <h4 className="cm-items-name"> {name}</h4>
      <p className="cm-items-comment">{comment}</p>
    </div>
  );
};

export default CmItems;
