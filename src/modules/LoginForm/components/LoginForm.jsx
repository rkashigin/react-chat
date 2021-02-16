import React from "react";
import { Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Block, Button } from "components";

import { validateField } from "utils/helpers";

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
  } = props;

  return (
    <div>
      <div className="auth__top">
        <h2>Sign In</h2>
        <p>Now you can sign in into your account</p>
      </div>
      <Block>
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
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button onClick={handleSubmit} type="primary" size={"large"}>
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
};

export default LoginForm;
