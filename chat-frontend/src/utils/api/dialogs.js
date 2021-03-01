import { axios } from "core";

const dialogsApi = {
  getAll: () => axios.get("/dialogs"),
  create: ({ text, partner }) => axios.post("/dialogs", { partner, text }),
};

export default dialogsApi;
