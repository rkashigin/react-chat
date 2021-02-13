import React from "react";
import { Button } from "./components";

function App() {
  return (
    <div className="wrapper">
      <h1>Hello, World!</h1>
      <Button type={"primary"} size={"large"}>
        This is Button
      </Button>
    </div>
  );
}

export default App;
