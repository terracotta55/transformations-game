import React, { Component } from "react";
import { Spring, animated } from "react-spring/renderprops";
import ReactExplode from "./Explosion";

class AnimateCompletion extends Component {
  render() {
    return (
      <>
        <Spring
          from={{ x: this.props.pathX }}
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
              strokeDasharray={props.x}
              strokeDashoffset={props.x}
            >
              <path d={this.props.path} />
            </animated.svg>
          )}
        </Spring>
        <ReactExplode />
      </>
    );
  }
}

export default AnimateCompletion;
