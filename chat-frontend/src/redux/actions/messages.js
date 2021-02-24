import { messagesApi } from "utils/api";

const Actions = {
  setMessages: (items) => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items,
  }),
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
};

export default Actions;
