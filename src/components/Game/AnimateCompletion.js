import React, { Component } from "react";
import { Spring, animated } from "react-spring/renderprops";

class AnimateCompletion extends Component {
  render() {
    return (
      <>
        <Spring
          from={{ x: 900 }}
          to={{ x: 0 }}
          config={{
            duration: 3000
          }}
        >
          {props => (
            <animated.svg
              fill="none"
              stroke="yellow"
              strokeWidth="5"
              strokeDasharray={900}
              strokeDashoffset={props.x}
            >
              <path d="M850 700 L750 800 L 750 900 L 950 900 L 950 800 Z" />
            </animated.svg>
          )}
        </Spring>
      </>
    );
  }
}

export default AnimateCompletion;