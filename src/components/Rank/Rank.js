import React from "react";
const Fragment = React.Fragment;

const Rank = ({ name, score }) => {
  return (
    <Fragment>
      <div className="f1 white">{`Hello ${name}! Welcome back.`}</div>
      <div
        style={{ color: "#FFD700" }}
        className="f2 white"
      >{`Your score is: ${score}`}</div>
    </Fragment>
  );
};

export default Rank;
