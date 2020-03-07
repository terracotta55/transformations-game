import React, { Component } from "react";
import translationX from "../Game/images/translationX.png";
import rotation90CounterClockwise from "../Game/images/rotation90CounterClockwise.png";
import rotation90Clockwise from "../Game/images/rotation90Clockwise.png";
import reflectX from "../Game/images/reflectX.png";

class Help extends Component {
  render() {
    return (
      <div className={this.props.helpStatus} id="idHelp">
        <h1>Geometric Transformations</h1>
        <h2>Translation</h2>
        <p>
          Moving an object in space without changing its size, shape or
          orientation. <br></br>
          Example: to say the shape gets moved 14 Units in the "X" direction, we
          can write: (x,y) -> (x+14,y)
        </p>
        <img src={translationX}></img>
        <h2>Rotation</h2>
        <p>
          Rotating an object about a fixed point without changing its size or
          shape <br></br>
          You can use the following rules:<br></br>
          To rotate an object 90° counterclockwise the rule is (x, y) → (-y, x)
          <img src={rotation90CounterClockwise}></img>
          <br></br>
          To rotate an object 90° clockwise the rule is (x, y) → (y, -x)
          <img src={rotation90Clockwise}></img>
          <br></br>
        </p>
        <h2>Reflection</h2>
        <p>
          Flipping an object across a line without changing its size or shape
          Example of reflection on the X axis:
          <img src={reflectX}></img>
        </p>
      </div>
    );
  }
}

export default Help;
