import axios from "axios";
import {Link ,useNavigate} from 'react-router-dom'


export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("api/auth/login", userCredential);
    dispatch({type:"LOGIN_SUCCESS", payload:res.data})

  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
export const Logoutcall = async (dispatch) => {
  const navigate = useNavigate()
  localStorage.clear()
  dispatch({ type: "LOGIN_START" });
  navigate.push('/tlognin')
};

export const ploginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("api/auth/plogin", userCredential);
    dispatch({type:"LOGIN_SUCCESS", payload:res.data})

  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
