import React, { Component } from 'react';
import TriangleShape from './TriangleShape.js';
import { Triangle } from './Triangle.js';
import { evaluateMatch } from './evaluate.js';
import Animation from './Animation.js';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: "",
      translateY: "",
      rotateDeg: "",
      reflectAxis: "",
      animate: null,
      moveCounter: 0
    }
    this.goal = new Triangle(7, -6, 5, -8, 7, -8);
    this.player = new Triangle(-4, 3, -4, 1, -2, 1);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleTranslate = async () => {
    await this.setState(state => ({
      animate: "translate"
    }));

    setTimeout(() => {
      this.player.translate(Number(this.state.translateX), Number(this.state.translateY));
      this.setState(state => ({
        animate: null,
        moveCounter: state.moveCounter + 1
        //translateX: "", enable later
        //translateY: "",
      }));
    }, 650);
  };

  handleRotate = async (deg) => {
    await this.setState(state => ({
      animate: "rotate",
      rotateDeg: deg
    }));

    setTimeout(() => {
      this.player.rotate(0, 0, deg);
      this.setState(state => ({
        animate: null,
        moveCounter: state.moveCounter + 1
      }));
    }, 650);
  }

  handleReflect = async (axis) => {
    await this.setState(state => ({
      animate: "reflect",
      reflectAxis: axis
    }));

    setTimeout(() => {
      this.player.reflect(axis);
      this.setState(state => ({
        animate: null,
        moveCounter: state.moveCounter + 1
      }));
    }, 650);
  }


  renderColumns = () => {
    let columns = [];
    for (let i = 0; i <= 1000; i = i + 50) {
      columns.push(<line key={i} x1={i} x2={i} y1="0" y2="1000" stroke="gray" strokeWidth="1" />)
    }
    return columns;
  }

  renderRows = () => {
    let rows = [];
    for (let i = 0; i <= 1000; i = i + 50) {
      rows.push(<line key={i} x1="0" x2="1000" y1={i} y2={i} stroke="gray" strokeWidth="1" />)
    }
    return rows;
  }

  renderXNumbers = () => {
    let xNumbers = [];
    let counter = -10;
    for (let i = 2; i <= 1000; i = i + 50) {
      xNumbers.push(<text key={i} x={i} y="515">{counter}</text>)
      counter = counter + 1;
    }
    return xNumbers;
  }

  renderYNumbers = () => {
    let yNumbers = [];
    let counter = 10;
    for (let i = -2; i <= 1000; i = i + 50) {
      if (counter !== 0) {
        yNumbers.push(<text key={i} x="505" y={i}>{counter}</text>)
      }
      counter = counter - 1;
    }
    return yNumbers;
  }

  render() {

    let win = "";
    if (evaluateMatch(this.player, this.goal)) {
      win = "WIN!"
    }
    
    return (
      <>
        <svg width="1000" height="1000" style={{backgroundColor: "white"}}>
          {this.renderColumns()}
          {this.renderRows()}
          <line x1="500" x2="500" y1="0" y2="1000" stroke="black" strokeWidth="3" />
          <line x1="0" x2="1000" y1="500" y2="500" stroke="black" strokeWidth="3" />

          {this.renderXNumbers()}
          {this.renderYNumbers()}
          <text x="505" y="15">10</text>
          <text x="980" y="515">10</text>

          <TriangleShape triangleClassName={"goal"} a={this.goal.a} b={this.goal.b} c={this.goal.c} />

          {!this.state.animate ? (
            <TriangleShape triangleClassName={"player"}
              a={this.player.a} b={this.player.b} c={this.player.c}
              animate={this.state.animate} />
          ) : null}

          {this.state.animate ? (
            <Animation
              triangleClassName={"player"}
              a={this.player.a}
              b={this.player.b}
              c={this.player.c}
              animate={this.state.animate}
              rotateDeg={this.state.rotateDeg}
              reflectAxis={this.state.reflectAxis}
              translateX={Number(this.state.translateX)}
              translateY={Number(this.state.translateY)} />
          ) : null}

          <text className={win === "WIN!" ? "win" : null} x="300" y="500">{win}</text>

        </svg>
        <br />

        <div className="buttons">
          x:<input className="input" type="number" onChange={this.handleOnChange} name={"translateX"} value={this.state.translateX} />
          y:<input className="input" type="number" onChange={this.handleOnChange} name={"translateY"} value={this.state.translateY} />
          <button onClick={() => this.handleTranslate()}>Translate</button>
          <button onClick={() => this.handleRotate(90)}>Rotate 90° ↻ </button>
          <button onClick={() => this.handleRotate(-90)}>Rotate 90° ↻ </button>
          <button onClick={() => this.handleReflect("x")}>Reflect on x-axis</button>
          <button onClick={() => this.handleReflect("y")}>Reflect on y-axis</button>
          <span>Move: {this.state.moveCounter}</span>
        </div>
      </>
    );
  }
}

export default Canvas;