import React, { Component } from 'react';


class TriangleShape extends Component {

  shouldComponentUpdate() {
    if (this.props.triangleClassName === "completed") {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const cax = (10 + this.props.a.x) * 50
    const cay = (10 - this.props.a.y) * 50
    const cbx = (10 + this.props.b.x) * 50
    const cby = (10 - this.props.b.y) * 50
    const ccx = (10 + this.props.c.x) * 50
    const ccy = (10 - this.props.c.y) * 50
    return (
      <>
        <polygon
          className={this.props.triangleClassName}
          fill={this.props.color}
          points={`${cax} ${cay}, ${cbx} ${cby}, ${ccx} ${ccy}`}>
        </polygon>

        {/* point labels */}
        {/* <text fontWeight="bold" x={cax} y={cay - (Math.sign(this.props.a.y) * 10)}>{`(${this.props.a.x}, ${this.props.a.y})`}</text> */}
        {/* <text font-weight="bold" x={cbx} y={cby - (Math.sign(this.props.b.y) * 10)}>{`(${this.props.b.x}, ${this.props.b.y})`}</text>
        <text font-weight="bold" x={ccx} y={ccy - (Math.sign(this.props.c.y) * 10)}>{`(${this.props.c.x}, ${this.props.c.y})`}</text> */}
      </>
    )
  };
}

export default TriangleShape;