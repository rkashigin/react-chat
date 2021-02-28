import { axios } from "core";

const messagesApi = {
  getAllBy: (dialogId) => axios.get(`/messages?dialog=${dialogId}`),
};

export default messagesApi;
