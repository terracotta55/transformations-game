import React, { Component } from "react";

class TriangleShape extends Component {
  shouldComponentUpdate() {
    //stop rendering the player triangle
    if (this.props.triangleClassName === "completed") {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const cax = (10 + this.props.a.x) * 50;
    const cay = (10 - this.props.a.y) * 50;
    const cbx = (10 + this.props.b.x) * 50;
    const cby = (10 - this.props.b.y) * 50;
    const ccx = (10 + this.props.c.x) * 50;
    const ccy = (10 - this.props.c.y) * 50;
    return (
      <>
        <polygon
          className={this.props.triangleClassName}
          fill={this.props.color}
          points={`${cax} ${cay}, ${cbx} ${cby}, ${ccx} ${ccy}`}
        ></polygon>
      </>
    );
  }
}

export default TriangleShape;
