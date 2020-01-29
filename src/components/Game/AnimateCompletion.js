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
              stroke="rgb(255, 79, 67)"
              strokeWidth="10"
              strokeDasharray={this.props.strokeDasharray}
              strokeDashoffset={props.x}
            >
              <path d={this.props.path} />
            </animated.svg>
          )}
        </Spring>
        <ReactExplode rank={this.props.rank}/>
      </>
    );
  }
}

export default AnimateCompletion;
