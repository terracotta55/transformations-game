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

    return (
      <>
        {this.props.animate ? (
          <Spring
            from={{ transform: "translate(0, 0)" }}
            to={{ transform: `translate(${transX}, ${transY})` }}
          >
            {props => (
              <polygon className={this.props.triangleClassName}
                points={`${cax} ${cay}, ${cbx} ${cby}, ${ccx} ${ccy}`}
                transform={props.transform}
              ></polygon>
            )}
          </Spring>
        ) : null}
      </>
    );
  }
}

export default Animation;