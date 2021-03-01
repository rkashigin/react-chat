import { axios } from "core";

const userApi = {
  login: (postData) => axios.post("/user/login", postData),
  signup: (postData) => axios.post("/user/create", postData),
  verifyHash: (hash) => axios.get("/user/verify?hash=" + hash),
  getMe: () => axios.get("/user/me"),
  findUsers: (query) => axios.get("user/find?query=" + query),
};

export default userApi;
