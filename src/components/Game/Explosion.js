import React, { Component } from "react";
import Explosion2 from "react-explode/Explosion2";
import Explosion3 from "react-explode/Explosion3";
import Explosion4 from "react-explode/Explosion4"; /* change foe Explosion1 to 10 for different effects  */
import fire1 from "../Game/sounds/fire1.mp3";
import fire2 from "../Game/sounds/fire2.mp3";
import fire3 from "../Game/sounds/fire3.mp3";

class ReactExplode extends Component {
  constructor(props) {
    super(props);
    this.sounds = [fire1, fire2, fire3]
  }

  playAudio = sound => {
    let audio = new Audio(sound);
    audio.play();
  };

  render() {
    setTimeout(() => {
      if (this.props.rank) {
        this.playAudio(this.sounds[this.props.rank - 1])
      }
    }, 3000);
  
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
