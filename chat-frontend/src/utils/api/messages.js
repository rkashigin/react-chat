import { axios } from "core";

const messagesApi = {
  getAllBy: (dialogId) => axios.get(`/messages?dialog=${dialogId}`),
  send: (text, dialogId) =>
    axios.post(`/messages`, { dialog_id: dialogId, text }),
};

export default messagesApi;
