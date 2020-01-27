import React, { Component } from "react";
import Explosion from "react-explode/Explosion9"; /* change foe Explosion1 to 10 for different effects  */

class ReactExplode extends Component {
  render() {
    return (
      <svg x="100" y="100">
        <Explosion
          size="800"
          delay={2}
          repeatDelay={0.1}
          repeat={3}
          color="#A0E6FF"
        />
      </svg>
    );
  }
}

export default ReactExplode;
