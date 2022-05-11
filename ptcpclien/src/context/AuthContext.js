import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AutoReducer";

const INITIAL_STATE = {
     user: {_id: "6278d42addbd75cd1eb46277",    
     firstname:"girum",
     lastname:" gizachew",
     username:"Teacher girum gizachew",
     email: "ned@gmail.com",
     password:"$2b$10$R04Io3CEe3p4JLC77knrbuzg8KEukJWKOxPezSQhBqp.qO1qFfQy.",
     profilePicture:"",
     isSystemAdmin:"false",
     isSchoolAdmin:"false",
     isteacher:"false",
     isparent:"false"},
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};