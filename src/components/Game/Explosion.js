import React, { Component } from "react";
import Explosion from "react-explode/Explosion3"; /* change foe Explosion1 to 10 for different effects  */

class ReactExplode extends Component {
  render() {
    return (
      <svg x="100" y="100">
        <Explosion
          size="800"
          delay={3}
          repeatDelay={0.1}
          repeat={2}
          color="white"
        />
      </svg>
    );
  }
}

export default ReactExplode;
