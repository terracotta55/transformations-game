import React from "react";
const Fragment = React.Fragment;

export const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <Fragment>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("home")}
            className="f3 dim pointer link underline fw6 ph0 mh0  mh3 black"
          >
            Go Home
          </p>
          <p
            onClick={() => onRouteChange("signout")}
            className="f3 dim pointer link underline fw6 ph0 mh0  mh3 black"
          >
            Sign Out
          </p>
        </nav>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 dim pointer link underline fw6 ph0 mh0 black mh3"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 dim pointer link underline fw6 ph0 mh0 black mh3"
          >
            Register
          </p>
        </nav>
      </Fragment>
    );
  }
};
