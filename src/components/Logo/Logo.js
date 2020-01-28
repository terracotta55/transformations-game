import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import game_logo_1 from "./Logo1.png";
import game_logo_2 from "./Logo2.png";
import game_logo_3 from "./Logo3.png";
import game_logo_4 from "./Logo4.png";
import game_logo_5 from "./Logo5.png";
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
            <img
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
                height: 220,
                width: 230
              }}
              alt="house-logo"
              src={game_logo_1}
              onClick={() => onRouteChange("game", "house")}
            />
          </div>
        </Tilt>
        <Tilt
          className="Tilt br3 shadow-5 pa1"
          options={{ max: 55 }}
          style={{ height: 240, width: 250 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
                height: 220,
                width: 230
              }}
              alt="tree-logo"
              src={game_logo_2}
              onClick={() => onRouteChange("game", "tree")}
            />
          </div>
        </Tilt>

        <Tilt
          className="Tilt br3 shadow-5 pa1"
          options={{ max: 55 }}
          style={{ height: 240, width: 250 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
                height: 220,
                width: 230
              }}
              alt="logo"
              src={game_logo_3}
              onClick={() => onRouteChange("game", "boat")}
            />
          </div>
        </Tilt>

        <Tilt
          className="Tilt br3 shadow-5 pa1"
          options={{ max: 55 }}
          style={{ height: 240, width: 250 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
                height: 220,
                width: 230
              }}
              alt="logo"
              src={game_logo_4}
              onClick={() => onRouteChange("game", "fish")}
            />
          </div>
        </Tilt>

        <Tilt
          className="Tilt br3 shadow-5 pa1"
          options={{ max: 55 }}
          style={{ height: 240, width: 250 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
                height: 220,
                width: 230
              }}
              alt="logo"
              src={game_logo_5}
              onClick={() => onRouteChange("game", "cat")}
            />
          </div>
        </Tilt>
      </div>
    </Fragment>
  );
};
