const initialState = {
  data: null,
  isAuth: !!window.localStorage.token,
  token: window.localStorage.token,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_DATA":
      return {
        ...state,
        data: payload,
        isAuth: true,
        token: window.localStorage.token,
      };
    case "USER:SET_IS_AUTH":
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
