const validateField = (key, touched, errors) => {
  if (!touched[key]) {
    return "";
  }

  if (touched[key] && errors[key]) {
    return "error";
  } else {
    return "success";
  }
};

export default validateField;
