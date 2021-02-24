import axios from "axios";

axios.defaults.baseURL = window.location.origin;
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export default axios;
