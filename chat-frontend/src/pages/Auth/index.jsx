import React from "react";
import { Route } from "react-router-dom";

import { LoginForm, SignupForm } from "modules";
import { CheckInfo } from "./components/CheckInfo";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path="/signin" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/signup/verify" component={CheckInfo} />
      </div>
    </section>
  );
};

export default Auth;
