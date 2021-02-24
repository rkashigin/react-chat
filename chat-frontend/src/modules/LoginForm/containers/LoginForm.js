import { withFormik } from "formik";
import LoginFrom from "../components/LoginForm";
import validateForm from "../../../utils/validate";
import axios from "core/axios";
import { openNotification } from "utils/helpers";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, setStatus }) => {
    return axios
      .post("/user/login", values)
      .then(({ data }) => {
        const { status, token } = data;
        if (status === "error") {
          openNotification({
            title: "Login error",
            text: "Wrong email or password",
            type: "error",
          });
        } else {
          openNotification({
            title: "Nice!",
            text: "You have been authorized",
            type: "success",
          });
        }
        console.log(data);
        setStatus(data.status);
        // localStorage.token = data.token;
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: "SignupForm",
})(LoginFrom);
