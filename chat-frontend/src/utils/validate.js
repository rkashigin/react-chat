const validate = ({ isAuth, values, errors }) => {
  const rules = {
    email: (errors, value) => {
      if (!value) {
        errors.email = "Email field is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Invalid email address";
      }
    },
    fullName: (errors, value) => {
      if (!isAuth && !value) {
        errors.fullName = "Full name field is required";
      }
    },
    password: (errors, value) => {
      if (!value) {
        errors.password = "Password field is required";
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)
      ) {
        errors.password = "Your password is not strong enough";
      }
    },
    password2: (errors, value) => {
      if (!value) {
        errors.password2 = "You need to confirm your password";
      } else if (value !== values.password) {
        errors.password2 = "Passwords don't match";
      }
    },
  };

  Object.keys(values).forEach(
    (key) => rules[key] && rules[key](errors, values[key])
  );
};

export default validate;
