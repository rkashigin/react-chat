import React from "react";
import { Route } from "react-router-dom";

import { Auth } from "./pages";
import { Home } from "./pages";
import { LoginForm } from "./modules";

function App() {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/signin", "/signup"]} component={Auth} />
      <Route exact path={"/im"} component={Home} />
    </div>
  );
}

export default App;
