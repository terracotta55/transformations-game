import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import game_logo from "./Logo.png";
const Fragment = React.Fragment;

export const Logo = () => {
  return (
    <Fragment>
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br3 shadow-5 pa1"
          options={{ max: 55 }}
          style={{ height: 240, width: 250 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img style={{ paddingTop: "15px" }} alt="logo" src={game_logo} />
          </div>
        </Tilt>
      </div>
    </Fragment>
  );
};
