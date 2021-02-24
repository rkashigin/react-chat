import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { Auth } from "./pages";
import { Home } from "./pages";

function App({ isAuth }) {
  return (
    <div className="wrapper">
      {isAuth ? <Redirect to="/im" /> : <Redirect to="/signin" />}
      <Route exact path={["/", "/signin", "/signup"]} component={Auth} />
      <Route path="/im" component={Home} />
    </div>
  );
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
