import { notification } from "antd";

export default ({ text, title, type = "info", duration = 3 }) =>
  notification[type]({
    message: title,
    description: text,
    duration: duration,
  });
