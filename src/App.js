import React, { Fragment, Component } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Canvas from "./components/Game/Canvas";
import Particles from "react-particles-js";

const particlesOptions = {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": false,
        "value_area": 0
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 0,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 250,
      "color": "#ffffff",
      "opacity": 1,
      "width": 2.5
    },
    "move": {
      "enable": false,
    }
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin", // there are 4 routes: signin (default), signout, home, game
      isSignedIn: false,
      // name: "Jimmy",
      username: "",
      totalScore: 0,
      houseScore: { score: 0, rank: 0 },
      treeScore: { score: 0, rank: 0 },
      boatScore: { score: 0, rank: 0 },
      fishScore: { score: 0, rank: 0 },
      catScore: { score: 0, rank: 0 },
      level: 0,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    };
    this.rankIcons = ["", "⭐", "⭐⭐", "⭐⭐⭐"]
  }

  addUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        totalScore: data.totalScore,
        joined: data.joined
      }
    });
  };

  onRouteChange = (route, levelSelect) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    } else if (route === "game") {
      this.setState({
        isSignedIn: true,
        level: levelSelect
      });
    }
    this.setState({ route: route });
  };

  getUsername = dataFromSignIn => {
    this.setState({ username: dataFromSignIn });
  };
  /*
  onRouteChange = route => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    } else if (route === "game") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };
*/

  updateScore = (newScore, newRank) => {
    console.log(newScore)
    if (newScore > this.state[`${this.state.level}Score`].score) {
      var scoreCopy = { ...this.state[`${this.state.level}Score`] }
      scoreCopy.score = Number(newScore);
      scoreCopy.rank = this.rankIcons[newRank];

      this.setState(state => ({
        [`${state.level}Score`]: scoreCopy,
        totalScore: this.state.houseScore.score + this.state.treeScore.score + this.state.boatScore.score + this.state.fishScore.score + this.state.catScore.score
      }));
    }
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          <Particles
            style={{ color: "red" }}
            className="particles"
            params={particlesOptions}
          />
          <Navigation
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange}
          />
          {this.state.route === "home" ? (
            <div>
              <Logo onRouteChange={this.onRouteChange} />
              <Rank name={this.state.username} totalScore={this.state.totalScore} />
              {/* <h2 style={{ color: "white" }}>Best Scores:</h2> */}
              <table className="highscores">
                <tr style={{ backgroundColor: "#EE2737FF", height: "40px" }}>
                  <th>Level</th>
                  <th>Scores</th>
                  <th>Bonus</th>
                </tr>
                <tr style={{ backgroundColor: "#339E66FF", height: "40px" }}>
                  <td>House:</td>
                  <td> {this.state.houseScore.score} </td>
                  <td> {this.state.houseScore.rank} </td>
                </tr>
                <tr style={{ backgroundColor: "#BA0020FF", height: "40px" }}>
                  <td>Tree: </td>
                  <td>{this.state.treeScore.score}</td>
                  <td>{this.state.treeScore.rank}</td>
                </tr>
                <tr style={{ backgroundColor: "#078282FF", height: "40px" }}>
                  <td>Boat: </td>
                  <td>{this.state.boatScore.score}</td>
                  <td>{this.state.boatScore.rank}</td>
                </tr>
                <tr style={{ backgroundColor: "#E683A9FF", height: "40px" }}>
                  <td>Fish:
                </td>
                  <td>{this.state.fishScore.score}</td>
                  <td>{this.state.fishScore.rank}</td>
                </tr>
                <tr style={{ backgroundColor: "#28334AFF", height: "40px" }}>
                  <td>Cat:
                </td>
                  <td>{this.state.catScore.score}</td>
                  <td>{this.state.catScore.rank}</td>
                </tr>
              </table>
            </div>
          ) : this.state.route === "signin" ? (
            <SignIn
              addUser={this.addUser}
              onRouteChange={this.onRouteChange}
              getUsername={this.getUsername}
            />
          ) : this.state.route === "game" ? (
            <Canvas
              style={{ backgroundColor: "white" }}
              onRouteChange={this.onRouteChange}
              level={this.state.level}
              username={this.state.username}
              bestScore={this.state[`${this.state.level}Score`].score}
              updateScore={(score, rank) => this.updateScore(score, rank)}
            />
          ) : (
                  <Register
                    addUser={this.addUser}
                    onRouteChange={this.onRouteChange}
                  />
                )}
        </div>
      </Fragment>
    );
  }
}

export default App;
