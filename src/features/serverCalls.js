import { loginFailure, loginStart, loginSuccess, registerPending, registerFulfilled, registerRejected } from "./userRedux";
import { publicRequest } from "../request";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async(dispatch, user) => {
  dispatch(registerPending());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerFulfilled(res.data));
  } catch (err) {
    dispatch(registerRejected());
  }
}


export const logout = () => {
  localStorage.removeItem("jsonwebtoken");
};



//export const logout
// see login page