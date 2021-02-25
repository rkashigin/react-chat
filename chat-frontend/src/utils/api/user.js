import { axios } from "core";

export default {
  login: (postData) => axios.post("/user/login", postData),
  signup: (postData) => axios.post("/user/create", postData),
  verifyHash: (hash) => axios.get("/user/verify?hash=" + hash),
  getMe: () => axios.get("/user/me"),
};
