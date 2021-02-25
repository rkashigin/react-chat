import { withFormik } from "formik";

import SignupForm from "../components/SignupForm";

import validateForm from "utils/validate";
import { userActions } from "redux/actions";

import store from "redux/store";
import { Redirect } from "react-router-dom";
import React from "react";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    fullName: "",
    password: "",
    password2: "",
  }),
  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(userActions.fetchUserSignup(values))
      .then(() => {
        setSubmitting(false);
        props.history.push("/signup/verify");
      })
      .catch((err) => {
        console.error(err.message);
        setSubmitting(false);
      });
  },
  displayName: "SignupForm",
})(SignupForm);
