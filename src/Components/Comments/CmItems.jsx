import React from "react";
const CmItems = ({ name, picture, comment }) => {
  return (
    <div className="cm-items">
      <h4 className="cm-name"> {name}</h4>
      <img src={picture} alt="cm-img" className="firstcm-img" />
      <p className="cm-comment">{comment}</p>
    </div>
  );
};

export default CmItems;
