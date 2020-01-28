import React from "react";
const Fragment = React.Fragment;

const Rank = ({ name, totalScore }) => {
  return (
    <Fragment>
      <div className="f1 white">{`Hello ${name}! Welcome back.`}</div>
      <div
        style={{ color: "#FFD700" }}
        className="f2 white"
      >{`Your score is: ${totalScore}`}</div>
    </Fragment>
  );
};

export default Rank;
