import { axios } from "core";

const dialogsApi = {
  getAll: () => axios.get("/dialogs"),
};

export default dialogsApi;
