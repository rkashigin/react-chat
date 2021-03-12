import { messagesApi } from "utils/api";

const Actions = {
  setMessages: (items) => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items,
  }),
  addMessage: (message) => (dispatch, getState) => {
    const { dialogs } = getState();
    const { currentDialogId } = dialogs;

    if (currentDialogId === message.dialog._id) {
      dispatch({
        type: "MESSAGES:ADD_MESSAGE",
        payload: message,
      });
    }
  },
  setIsLoading: (bool) => ({
    type: "MESSAGES:SET_IS_LOADING",
    payload: bool,
  }),
  fetchMessages: (dialogId) => (dispatch) => {
    dispatch(Actions.setIsLoading(true));
    messagesApi
      .getAllBy(dialogId)
      .then(({ data }) => {
        dispatch(Actions.setMessages(data));
        dispatch(Actions.setIsLoading(false));
      })
      .catch(() => {
        dispatch(Actions.setIsLoading(false));
      });
  },
  fetchSendMessage: ({ text, dialogId, attachments }) => (dispatch) => {
    return messagesApi.send(text, dialogId, attachments);
  },
  removeMessageById: (id) => (dispatch) => {
    if (window.confirm("Are you sure, that you want to delete this message?")) {
      messagesApi
        .removeById(id)
        .then(({ data }) => {
          dispatch({
            type: "MESSAGES:REMOVE_MESSAGE",
            payload: id,
          });
        })
        .catch(() => dispatch(Actions.setIsLoading(false)));
    }
  },
};

export default Actions;
