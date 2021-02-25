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
import { Block, Button, FormField } from "components";

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
    isSubmitting,
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
            <FormField
              name="email"
              touched={touched}
              errors={errors}
              values={values}
              placeholder="Enter your Email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              icon={<MailOutlined className="site-form-item-icon" />}
            />
            <FormField
              name="fullName"
              touched={touched}
              errors={errors}
              values={values}
              placeholder="Enter your full name"
              handleChange={handleChange}
              handleBlur={handleBlur}
              icon={<UserOutlined className="site-form-item-icon" />}
            />
            <FormField
              name="password"
              touched={touched}
              errors={errors}
              values={values}
              placeholder="Enter your password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              icon={<LockOutlined className="site-form-item-icon" />}
              type="password"
            />
            <FormField
              name="password2"
              touched={touched}
              errors={errors}
              values={values}
              placeholder="Confirm your password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              icon={<ReloadOutlined className="site-form-item-icon" />}
              type="password"
            />
            <Form.Item>
              <Button
                disabled={isSubmitting}
                onClick={handleSubmit}
                type="primary"
                size={"large"}
              >
                Sign up
              </Button>
            </Form.Item>
            <Link className="auth__signup-link" to="/signin">
              Sign in
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
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
