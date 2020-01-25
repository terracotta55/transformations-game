import React, { Component } from "react";
import { Spring, animated } from "react-spring/renderprops";

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
      </>
    );
  }
}

export default AnimateCompletion;