import React from "react";
import { Block, Button } from "../../components";

import "./Auth.scss";

const Auth = () => (
  <section className={"auth"}>
    <Block>
      <h1>Hello, World!</h1>
      <Button type={"primary"} size={"large"}>
        This is Button
      </Button>
    </Block>
  </section>
);

export default Auth;
