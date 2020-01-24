import React, { Component } from 'react';
import TriangleShape from './TriangleShape.js';
import { Triangle } from './Triangle.js';
import { evaluateMatch, evaluateBoundary } from './evaluate.js';
import Animation from './Animation.js';
import AnimateCompletion from "./AnimateCompletion.js";
import Tilt from "react-tilt";


class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: "",
      translateY: "",
      rotateDeg: "",
      reflectAxis: "",
      animate: null,
      moveCounter: 0,
      score: 0,
      outside: false
    }
    this.tangram = this.initializeGoals();
    this.players = this.initializePlayers();
    this.player = this.initializePlayer();
  }

  initializeGoals = () => {
    //need props parameter to pass in goal object
    //map through and initialize each goal triangle
    const goals = [];

    goals.push(new Triangle(9, -6, 5, -8, 9, -8));
    goals.push(new Triangle(5, -6, 5, -8, 9, -6));
    goals.push(new Triangle(7, -4, 5, -6, 9, -6));

    return goals;
  }

  initializePlayers = () => {
    //randomize coordinates
    //randomize color?

    const players = [];

    players.push(new Triangle(-5, 6, -5, 8, -9, 6));
    players.push(new Triangle(-5, 6, -5, 8, -9, 6));
    players.push(new Triangle(-5, 6, -7, 8, -9, 6));

    return players;
  }

  initializePlayer = () => {
    return this.players.pop();
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleTranslate = () => {
    this.setState({
      animate: "translate"
    });

    setTimeout(() => {
      this.player.translate(
        Number(this.state.translateX),
        Number(this.state.translateY)
      );
      let bound = evaluateBoundary(this.player);
      this.setState(state => ({
        animate: null,
        moveCounter: state.moveCounter + 1,
        outside: bound,
      }));
    }, 650);

    setTimeout(() => {
      if (this.state.outside === true) {
        this.setState(state => ({
          animate: "translate"
        }));
        this.player.translate(
          Number(-this.state.translateX),
          Number(-this.state.translateY)
        );
        this.setState(state => ({
          animate: null,
          moveCounter: state.moveCounter + 1,
          outside: false
        }));
      }
    }, 650);

    setTimeout(() => {
      this.setState({
        translateX: "",
        translateY: ""
      });
    }, 650);
  };

  handleRotate = (deg) => {
    this.setState(state => ({
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
  };

  handleReflect = (axis) => {
    this.setState(state => ({
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
      columns.push(
        <line
          key={i}
          x1={i}
          x2={i}
          y1="0"
          y2="1000"
          stroke="gray"
          strokeWidth="1"
        />
      );
    }
    return columns;
  };

  renderRows = () => {
    let rows = [];
    for (let i = 0; i <= 1000; i = i + 50) {
      rows.push(
        <line
          key={i}
          x1="0"
          x2="1000"
          y1={i}
          y2={i}
          stroke="gray"
          strokeWidth="1"
        />
      );
    }
    return rows;
  };

  renderXNumbers = () => {
    let xNumbers = [];
    let counter = -10;
    for (let i = 2; i <= 1000; i = i + 50) {
      xNumbers.push(
        <text key={i} x={i} y="515">
          {counter}
        </text>
      );
      counter = counter + 1;
    }
    return xNumbers;
  };

  renderYNumbers = () => {
    let yNumbers = [];
    let counter = 10;
    for (let i = -2; i <= 1000; i = i + 50) {
      if (counter !== 0) {
        yNumbers.push(
          <text key={i} x="505" y={i}>
            {counter}
          </text>
        );
      }
      counter = counter - 1;
    }
    return yNumbers;
  };

  renderTangram = () => {
    let counter = 0;
    return this.tangram.map(goal => {
      counter = counter + 1;
      return <TriangleShape key={counter} triangleClassName={goal.completed ? "completed" : "goal"} a={goal.a} b={goal.b} c={goal.c} />
    })
  }

  render() {
        let win = true;
    for (let goal of this.tangram) {
      if (!goal.completed) {
        if (evaluateMatch(this.player, goal)) {
          //complete goal
          //disable goal
          goal.completed = true;
          this.player = this.initializePlayer();
          break;
        }
        win = false;
      }
    }
  
    return (
      <Fragment>
        <div className="container">
          <div className="info-div yellow">
            <p>Player Info:</p>
            <Tilt
              className="new-tilt br3"
              options={{ max: 55 }}
              style={{ height: 280, width: 250 }}
            >
              <article class="flex flex-column mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                  <img
                    src="https://udayton.edu/0/img/generic-profile.png"
                    class="br-100 h3 w3 dib"
                    title="Profile Photo"
                  />
                  <h1 class="f4 black">Jimmy Butler</h1>
                  <hr class="mw3 bb bw1 b--black-10" />
                </div>
                <p class="lh-copy measure center f6 gray">Score: 2050</p>
                <p class="lh-copy measure center f6 gray">Level: 3</p>
              </article>
            </Tilt>
          </div>
          <div className="svg-div">
           <svg width="1000" height="1000" style={{ backgroundColor: "white" }}>
          {this.renderColumns()}
          {this.renderRows()}
          <line x1="500" x2="500" y1="0" y2="1000" stroke="black" strokeWidth="3" />
          <line x1="0" x2="1000" y1="500" y2="500" stroke="black" strokeWidth="3" />

          {this.renderXNumbers()}
          {this.renderYNumbers()}
          <text x="505" y="15">10</text>
          <text x="980" y="515">10</text>

          {this.renderTangram()}

          {!this.state.animate && !win ? (
            <TriangleShape triangleClassName={"player"}
              a={this.player.a} b={this.player.b} c={this.player.c}
            />
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

          {win ? <AnimateCompletion /> : null}

            </svg>
          </div>
          <div className="buttons-div">
            <div className="buttons">
              <div className="btn-txt-div">
                <div className="flex flex-row">
                  <div className="btn-txt pr2">x-move:</div>
                  <input
                    className="input"
                    type="number"
                    onChange={this.handleOnChange}
                    name={"translateX"}
                    value={this.state.translateX}
                  />
                </div>
                <br />
                <div className="flex flex-row">
                  <div className="btn-txt pr2">y-move:</div>
                  <input
                    className="input"
                    type="number"
                    onChange={this.handleOnChange}
                    name={"translateY"}
                    value={this.state.translateY}
                  />
                </div>
              </div>

              <a
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleTranslate()}
                disabled={this.state.animate ? true : false}
              >
                Translate
              </a>
              <a
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleRotate(90)}
                disabled={this.state.animate ? true : false}
              >
                Rotate 90° ↻
              </a>
              <a
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleRotate(-90)}
                disabled={this.state.animate ? true : false}
              >
                Rotate 90° ↻
              </a>
              <a
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleReflect("x")}
                disabled={this.state.animate ? true : false}
              >
                Reflect on x-axis
              </a>
              <a
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleReflect("y")}
                disabled={this.state.animate ? true : false}
              >
                Reflect on y-axis
              </a>
              <article className="mw5 mw6-ns hidden mv4 moves">
                <h1 className="f5 bg-gray white mv0 pv2 ph3">
                  Number of Moves
                </h1>
                <div className="pa3 bg-yellow">
                  <p className="f6 f5-ns lh-copy measure mv0">
                    {this.state.moveCounter}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Canvas;