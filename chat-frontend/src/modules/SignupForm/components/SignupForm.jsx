import React from "react";
import { Form, Input } from "antd";
import {
  InfoCircleTwoTone,
  LockOutlined,
  MailOutlined,
  ReloadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Block, Button } from "../../../components";

import { validateField } from "utils/helpers";

const SignupForm = (props) => {
  const success = false;
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    dirty,
    isValid,
  } = props;

  return (
    <div>
      <div className="auth__top">
        <h2>Sign up</h2>
        <p>Fill the form below to create new account</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
              validateStatus={validateField("email", touched, errors)}
              hasFeedback
              help={!touched.email ? null : errors.email}
            >
              <Input
                id={"email"}
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Enter your Email"
                size={"large"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Enter your username"
                size={"large"}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("password", touched, errors)}
              hasFeedback
              help={!touched.password ? null : errors.password}
            >
              <Input
                id={"password"}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Enter your password"
                size={"large"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("password2", touched, errors)}
              hasFeedback
              help={!touched.password2 ? null : errors.password2}
            >
              <Input
                id={"password2"}
                prefix={<ReloadOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm your password"
                size={"large"}
                value={values.password2}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              {dirty && !isValid && <span>Error!</span>}
              <Button
                onClick={handleSubmit}
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
};

export default SignupForm;
