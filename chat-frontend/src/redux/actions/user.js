import { openNotification } from "utils/helpers";
import { userApi } from "utils/api";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserData: () => (dispatch) => {
    userApi.getMe().then(({ data }) => {
      dispatch(Actions.setUserData(data));
    });
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.login(postData).then(({ data }) => {
      const { status, token } = data;
      if (status === "error") {
        openNotification({
          title: "Login error",
          text: "Wrong email or password",
          type: "error",
        });
      } else {
        openNotification({
          title: "Nice!",
          text: "You have been authorized",
          type: "success",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
      }
      return data;
    });
  },
  fetchUserSignup: (postData) => (dispatch) => {
    return userApi.signup(postData).then(({ data }) => {
      console.log(data);
    });
  },
};

export default Actions;
