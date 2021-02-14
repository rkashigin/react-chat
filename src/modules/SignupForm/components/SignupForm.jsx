import React from "react";
import { Form, Input } from "antd";
import {
  InfoCircleTwoTone,
  LockOutlined,
  MailOutlined,
  ReloadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Route } from "react-router-dom";
import { Block, Button } from "../../../components";

class SignupForm extends React.Component {
  onFinish = (values) => {
    console.log("Received values of form ", values);
  };

  render() {
    const success = false;
    return (
      <div>
        <div className="auth__top">
          <h2>Sign up</h2>
          <p>Fill the form below to create new account</p>
        </div>
        <Block>
          {!success ? (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
            >
              <Form.Item name="email">
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Enter your Email"
                  size={"large"}
                />
              </Form.Item>
              <Form.Item name="username">
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Enter your username"
                  size={"large"}
                />
              </Form.Item>
              <Form.Item name="password">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Enter your password"
                  size={"large"}
                />
              </Form.Item>
              <Form.Item name="confirm">
                <Input
                  prefix={<ReloadOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Confirm your password"
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
                  Sign up
                </Button>
              </Form.Item>
              <Link className={"auth__signup-link"} to="/signin">
                Sign in
              </Link>
            </Form>
          ) : (
            <div className={"auth__success-block"}>
              <div>
                <InfoCircleTwoTone />
              </div>
              <h2>Verify your account</h2>
              <p>We sent a letter with verifying link to your email.</p>
            </div>
          )}
        </Block>
      </div>
    );
  }
}

export default SignupForm;
