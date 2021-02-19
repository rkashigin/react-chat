import { axios } from "core";

export default {
  getAllBy: (dialogId) => axios.get(`/messages?dialog=${dialogId}`),
};
