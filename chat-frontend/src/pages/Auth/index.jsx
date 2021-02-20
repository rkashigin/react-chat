import React from "react";
import { LoginForm, SignupForm } from "../../modules";
import { Route } from "react-router-dom";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className={"auth"}>
      <div className="auth__content">
        <Route exact path={["/", "/signin"]} component={LoginForm} />
        <Route exact path={"/signup"} component={SignupForm} />
      </div>
    </section>
  );
};

export default Auth;
