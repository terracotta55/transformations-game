import React from "react";
const Fragment = React.Fragment;

const Rank = ({ name, totalScore }) => {
  return (
    <Fragment>
      <div className="f1 white" style={{color: "#28334AFF"}}>{`Hello ${name}! Welcome back.`}</div>
      <div
        // style={{ color: "#FFD700" }}
        style={{ color: "#EE2737FF" }}
        className="f2 white"
      >{`Your total score is: ${totalScore}`}</div>
    </Fragment>
  );
};

export default Rank;
