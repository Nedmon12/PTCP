import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AutoReducer";

const INITIAL_STATE = {
  user: {
    firstname:"beka",
   _id: "629b7f1c06f046023ecb41bf",    
   lastname:"tegene",
   username:"chalachube@gmail.com",
   email: "chalachube@gmail.com",
   resposibleclass: "4A",
   password:"$2b$10$eetuBT3Gzc3l1IPff1e66eH7xkoLCoIbLIFJb.I4jaC.eq2HUPJHm",
   profilePicture:"",
   isSystemAdmin:"false",
   isSchoolAdmin:"false",
   isteacher:"false",
   isparent:"false"
   
 },
   isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
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