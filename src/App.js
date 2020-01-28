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
      houseScore: 0,
      treeScore: 0,
      boatScore: 0,
      fishScore: 0,
      catScore: 0,
      level: 0,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    };
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

  updateScore = (score) => {
    console.log(score)
    if (score > this.state[`${this.state.level}Score`]) {
      this.setState(state => ({
        [`${state.level}Score`]: score
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
              <div className="highscores">
                <h3>Best Scores:</h3>
                <p>House: {this.state.houseScore}</p>
                <p>Tree: {this.state.treeScore}</p>
                <p>Boat: {this.state.boatScore}</p>
                <p>Fish: {this.state.fishScore}</p>
                <p>Cat: {this.state.catScore}</p>
              </div>
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
              bestScore={this.state[`${this.state.level}Score`]}
              updateScore={(score) => this.updateScore(score)}
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
