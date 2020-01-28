import React, { Component } from "react";
import TriangleShape from "./TriangleShape.js";
import { Triangle } from "./Triangle.js";
import { evaluateMatch, evaluateBoundary } from "./evaluate.js";
import tangrams, { colorPalette } from "./tangrams.js";

import Animation from "./Animation.js";
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
      outside: false,
      color: "",
    };
    this.goals = this.initializeGoals(this.props.level);
    this.players = this.initializePlayers(this.props.level);
    this.player = this.players.pop();
    this.colors = [];
  }


  initializeGoals = level => {
    return tangrams[level].pieces.map(goal => {
      return new Triangle(goal);
    });
  };

  initializePlayers = level => {
    return tangrams[level].pieces.map(player => {
      return new Triangle(player.map(coordinates => -coordinates));
    });
  };

  shuffle = (array) => {
    let array2 = array.slice();
    for (let i = array2.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array2[i], array2[j]] = [array2[j], array2[i]];
    }
    return array2;
  }

  componentDidMount = () => {
    this.colors = this.shuffle(colorPalette)

    this.setState({
      color: this.colors.pop(),
      start: true
    });
  }

  reInitializePlayer = () => {
    if (this.players.length) {
      const player = this.players.pop();
      player.randomizeLocation();

      this.setState({
        color: this.colors.pop()
      });

      return player;
    }
  };

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
        outside: bound
      }));
    }, 650);

    setTimeout(() => {
      if (this.state.outside) {
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

  handleRotate = deg => {
    this.setState(state => ({
      animate: "rotate",
      rotateDeg: deg
    }));

    setTimeout(() => {
      this.player.rotate(deg);
      this.setState(state => ({
        animate: null,
        moveCounter: state.moveCounter + 1
      }));
    }, 650);
  };

  handleReflect = axis => {
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
  };

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
        <text key={i} x={i} y="515" fontWeight="bold">
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
          <text key={i} x="505" y={i} fontWeight="bold">
            {counter}
          </text>
        );
      }
      counter = counter - 1;
    }
    return yNumbers;
  };

  rendergoals = () => {
    let counter = 0;
    return this.goals.map(goal => {
      counter = counter + 1;
      return (
        <TriangleShape
          key={counter}
          triangleClassName={goal.completed ? "completed" : "goal"}
          color={this.state.color}
          a={goal.a}
          b={goal.b}
          c={goal.c}
        />
      );
    });
  };

  render() {
    let win = true;

    for (let goal of this.goals) {
      if (!goal.completed) {
        console.log("eval")
        if (evaluateMatch(this.player, goal)) {
          goal.completed = true;
          this.player = this.reInitializePlayer();
          break;
        }
        win = false;
      }
    }

    return (
      <>
        <div className="container">
          <div className="info-div yellow">
            <p>Player Info:</p>
            <Tilt
              className="new-tilt br3"
              options={{ max: 55 }}
              style={{ height: 280, width: 250 }}
            >
              <article className="flex flex-column mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                  <img
                    src="https://udayton.edu/0/img/generic-profile.png"
                    className="br-100 h3 w3 dib"
                    title="Profile Photo"
                    alt="Profile"
                  />
                  <h1 className="f4 black">{this.props.username}</h1>
                  <hr className="mw3 bb bw1 b--black-10" />
                </div>
                <p className="lh-copy measure center f6 gray">Score: 2050</p>
                <p className="lh-copy measure center f6 gray">Level: 3</p>
              </article>
            </Tilt>
          </div>
          <div className="svg-div">
            <svg width="1000" height="1000">
              {this.renderColumns()}
              {this.renderRows()}
              <line
                x1="500"
                x2="500"
                y1="0"
                y2="1000"
                stroke="black"
                strokeWidth="3"
              />
              <line
                x1="0"
                x2="1000"
                y1="500"
                y2="500"
                stroke="black"
                strokeWidth="3"
              />
              {this.renderXNumbers()}
              {this.renderYNumbers()}
              <text x="505" y="15" fontWeight="bold">
                10
              </text>
              <text x="980" y="515" fontWeight="bold">
                10
              </text>
              {this.rendergoals()}
              {!this.state.animate && !win ? (
                <TriangleShape
                  triangleClassName={"player"}
                  color={this.state.color}
                  a={this.player.a}
                  b={this.player.b}
                  c={this.player.c}
                />
              ) : null}
              {this.state.animate ? (
                <Animation
                  triangleClassName={"player"}
                  color={this.state.color}
                  a={this.player.a}
                  b={this.player.b}
                  c={this.player.c}
                  animate={this.state.animate}
                  rotateDeg={this.state.rotateDeg}
                  reflectAxis={this.state.reflectAxis}
                  translateX={Number(this.state.translateX)}
                  translateY={Number(this.state.translateY)}
                />
              ) : null}
              {win ? (
                <AnimateCompletion
                  path={tangrams[this.props.level].path}
                  pathX={tangrams[this.props.level].pathX}
                  strokeDasharray={tangrams[this.props.level].strokeDasharray}
                />
              ) : null}
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

              <button
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleTranslate()}
                disabled={this.state.animate || win ? true : false}
              >
                Translate
              </button>
              <button
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleRotate(90)}
                disabled={this.state.animate || win ? true : false}
              >
                Rotate +90° &#8635;
              </button>
              <button
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleRotate(-90)}
                disabled={this.state.animate || win ? true : false}
              >
                Rotate -90° &#8634;
              </button>
              <button
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleReflect("x")}
                disabled={this.state.animate || win ? true : false}
              >
                Reflect on x-axis
              </button>
              <button
                className="f6 link dim ph3 pv2 mb2 dib black bg-yellow"
                href="#0"
                onClick={() => this.handleReflect("y")}
                disabled={this.state.animate || win ? true : false}
              >
                Reflect on y-axis
              </button>
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
      </>
    );
  }
}

export default Canvas;
