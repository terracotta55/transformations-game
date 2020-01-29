import React, { Component } from "react";
import Explosion2 from "react-explode/Explosion2";
import Explosion3 from "react-explode/Explosion3";
import Explosion4 from "react-explode/Explosion4"; /* change foe Explosion1 to 10 for different effects  */

class ReactExplode extends Component {
 
  render() {
    console.log(this.props.rank);
    return (
      <svg x="100" y="100">
        {this.props.rank === 1 ? (
          <Explosion2
            size="800"
            delay={3}
            repeatDelay={0}
            repeat={0}
            color="white"
          />
        ) : this.props.rank === 2 ? (
          <Explosion3
            size="800"
            delay={3}
            repeatDelay={0}
            repeat={1}
            color="white"
          />
        ) : this.props.rank === 3 ? (
          <Explosion4
            size="800"
            delay={3}
            repeatDelay={0}
            repeat={2}
            color="white"
          />
        ) : null}
      </svg>
    );
  }
}

export default ReactExplode;
