import { openNotification } from "utils/helpers";
import { userApi } from "utils/api";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  setIsAuth: (bool) => ({
    type: "USER:SET_IS_AUTH",
    payload: bool,
  }),
  fetchUserData: () => (dispatch) => {
    userApi
      .getMe()
      .then(({ data }) => {
        dispatch(Actions.setUserData(data));
      })
      .catch((err) => {
        if (err.response.status === 403) {
          dispatch(Actions.setIsAuth(false));
          delete window.localStorage.token;
        }
      });
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi
      .login(postData)
      .then(({ data }) => {
        const { status, token } = data;
        openNotification({
          title: "Nice!",
          text: "You have been authorized",
          type: "success",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
        dispatch(Actions.setIsAuth(true));

        return data;
      })
      .catch(({ response }) => {
        if (response.status === 403) {
          openNotification({
            title: "Login error",
            text: "Incorrect email or password",
            type: "error",
          });
        }
      });
  },
  fetchUserSignup: (postData) => (dispatch) => {
    return userApi.signup(postData).then(({ data }) => {
      console.log(data);
    });
  },
};

export default Actions;
