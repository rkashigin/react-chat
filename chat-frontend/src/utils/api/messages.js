import { axios } from "core";

const messagesApi = {
  getAllBy: (dialogId) => axios.get(`/messages?dialog=${dialogId}`),
  removeById: (id) => axios.delete(`/messages?id=${id}`),
  send: (text, dialogId, attachments) =>
    axios.post(`/messages`, { dialog_id: dialogId, text, attachments }),
};

export default messagesApi;
