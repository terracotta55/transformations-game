import React from "react";
const Fragment = React.Fragment;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }
  onNameChange = e => {
    this.setState({ name: e.target.value });
  };
  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  onSubmitRegister = () => {
    this.props.onRouteChange("home");
    this.props.getUsername(this.state.name);
    this.props.registerUser(this.state);
  };
  render() {
    return (
      <Fragment>
        <article className="br3 ba dark-gray b--white-40 mv4 w-100 w-100-m w-50-l mw6 center shadow-3">
          <main className="pa2 black-80 w-60">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 black">Register</legend>
                {/* <div className="mt3">
                  <label className="db fw6 lh-copy f4 white pr2" htmlFor="name">
                    Name:
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white-90"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div> */}
                <div className="mt3">
                  <label className="db fw6 lh-copy f4 black pr2" htmlFor="name">
                    Username
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-90"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="mv1">
                  <label
                    className="db fw6 lh-copy f4 black pr2"
                    htmlFor="email-address"
                  >
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-90"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv1">
                  <label
                    className="db fw6 lh-copy f4 black pr2"
                    htmlFor="password"
                  >
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
                  onClick={this.onSubmitRegister}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib black b--black-90"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
      </Fragment>
    );
  }
}

export default Register;
