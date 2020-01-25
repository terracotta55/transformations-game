import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import game_logo from "./Logo.png";
const Fragment = React.Fragment;

export const Logo = ({ onRouteChange }) => {
  return (
    <Fragment>
      <div className="ma4 mt0 levels">
        <Tilt
          className="Tilt br3 shadow-5 pa1"
          options={{ max: 55 }}
          style={{ height: 240, width: 250 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img style={{ paddingTop: "15px" }} alt="logo" src={game_logo} onClick={() => onRouteChange("game", "house")}/>
          </div>
        </Tilt>

        <Tilt
          className="Tilt br3 shadow-5 pa1"
          options={{ max: 55 }}
          style={{ height: 240, width: 250 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img style={{ paddingTop: "15px" }} alt="logo" src={game_logo} onClick={() => onRouteChange("game", "boat")}/>
          </div>
        </Tilt>

        <Tilt
          className="Tilt br3 shadow-5 pa1"
          options={{ max: 55 }}
          style={{ height: 240, width: 250 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img style={{ paddingTop: "15px" }} alt="logo" src={game_logo} onClick={() => onRouteChange("game", "fish")}/>
          </div>
        </Tilt>

        <Tilt
          className="Tilt br3 shadow-5 pa1"
          options={{ max: 55 }}
          style={{ height: 240, width: 250 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img style={{ paddingTop: "15px" }} alt="logo" src={game_logo} onClick={() => onRouteChange("game", "cat")}/>
          </div>
        </Tilt>

      </div>
    </Fragment>
  );
};
