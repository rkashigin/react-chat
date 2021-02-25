import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { Auth } from "./pages";
import { Home } from "./pages";
import { Switch } from "react-router";

function App({ isAuth }) {
  return (
    <div className="wrapper">
      <Switch>
        <Route
          exact
          path={["/signin", "/signup", "/signup/verify"]}
          component={Auth}
        />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        />
      </Switch>
    </div>
  );
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
