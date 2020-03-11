import React from "react";
import fetchFunctions from "../../api/javascript/fetchFunctions.js";
const Fragment = React.Fragment;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInUser: "",
      signInEmail: "",
      signInPassword: "",
      signInError: ""
    };
  }
  onUserChange = e => {
    this.setState({ signInUser: e.target.value });
  };
  onEmailChange = e => {
    this.setState({ signInEmail: e.target.value });
  };
  onPasswordChange = e => {
    this.setState({ signInPassword: e.target.value });
  };
  onSubmitSignIn = (dev) => {
    // this.props.getUsername(this.state.signInUser);
    this.loginUser(this.state);
  };
  onDevSignIn = () => {
    const devUser = {
      UserID: "0",
      UserName: "Dev",
      UserEmail: "Dev@transfomations.com"
    }
    this.props.loadUser(devUser);
    this.props.onRouteChange("home");
  };

  loginUser = async (user) => {
    const userResponse = await fetchFunctions.loadData(user.signInUser)
    if (user.signInPassword === userResponse.UserPassword) {
      await fetchFunctions.loginUser(userResponse.UserName);
      console.log(userResponse)
      this.props.loadUser(userResponse);
      this.props.onRouteChange("home");
    } else {
      this.setState({ signInError: "Username or Password is incorrect" });
    }
  };

  render() {
    // const { onRouteChange } = this.props;
    return (
      <Fragment>
        <article className="br3 ba dark-gray b--white-40 mv4 w-100 w-100-m w-50-l mw6 center shadow-3">
          <main className="pa2 black-80 w-60">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 black">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f4 black" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-90"
                    type="text"
                    name="username"
                    id="username"
                    onChange={this.onUserChange}
                  />
                </div>
                {/* <div className="mt3">
                  <label
                    className="db fw6 lh-copy f4 white"
                    htmlFor="email-address"
                  >
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white-90"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div> */}
                <div className="mv1">
                  <label className="db fw6 lh-copy f4 black" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-90"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib black b--black-90"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div style={{margin: "10px"}}>
                <input
                  onClick={this.onDevSignIn}
                  className="b ph2 pv1 input-reset ba b--gray bg-transparent grow pointer f7 dib gray b--gray-90"
                  type="submit"
                  value="Dev"
                />
              </div>
            </div>
            <div>
              <label className="db fw6 lh-copy f5 red">
                {this.state.signInError}
              </label>
            </div>
          </main>
        </article>
      </Fragment>
    );
  }
}

export default SignIn;
