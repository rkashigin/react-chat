import React from "react";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Block, Button } from "../../../components";

class LoginForm extends React.Component {
  onFinish = (values) => {
    console.log("Received values of form ", values);
  };

  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Sign In</h2>
          <p>Now you can sign in into your account</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item name="username">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                size={"large"}
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size={"large"}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size={"large"}
              >
                Sign in
              </Button>
            </Form.Item>
            <Link className={"auth__signup-link"} to="/signup">
              Sign up
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}

export default LoginForm;
