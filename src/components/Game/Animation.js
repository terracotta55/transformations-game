import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class Animation extends Component {

  render() {
    const cax = (10 + this.props.a.x) * 50;
    const cay = (10 - this.props.a.y) * 50;
    const cbx = (10 + this.props.b.x) * 50;
    const cby = (10 - this.props.b.y) * 50;
    const ccx = (10 + this.props.c.x) * 50;
    const ccy = (10 - this.props.c.y) * 50;

    const transX = this.props.translateX * 50;
    const transY = this.props.translateY * -50;
    const deg = this.props.rotateDeg;
    const transformName = this.props.animate;

    let transformFrom;
    let transformTo;

    switch (transformName) {
      case "translate":
        transformFrom = `${transformName}(0, 0)`;
        transformTo = `${transformName}(${transX}, ${transY})`
        break;
      case "rotate":
        transformFrom = `${transformName}(0)`;
        transformTo = `${transformName}(${deg})`
        break;
      case "reflect":
        transformFrom = `scale(1, 1)`;
        transformTo = `scale(${this.props.reflectAxis === "x" ? "1, -1" : "-1, 1" })`
        break;
      default:
        break;
    }

    return (
      <>
        <Spring
          from={{ transform: transformFrom }}
          to={{ transform: transformTo }}
        >
          {props => (
            <polygon className={this.props.triangleClassName}
              points={`${cax} ${cay}, ${cbx} ${cby}, ${ccx} ${ccy}`}
              transform={props.transform}
              transform-origin="500 500"
            ></polygon>
          )}
        </Spring>
      </>
    );
  }
}

export default Animation;