import { createContext, useContext, useReducer, useState } from "react";
import authenticationReducer from "../../reducers/authenticationReducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const initialState = {
  loggedIn: false,
  users: [
    { user: "Ravi", password: "123" },
    { user: "a", password: "1" },
  ],
};

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  //   i will also merge this above usestate in the reducer, cause i am already using reducer then what is the point of using it?
  const [stateAuth, dispatchAuth] = useReducer(
    authenticationReducer,
    initialState
  );
  return (
    <AuthContext.Provider
      value={{ stateAuth, dispatchAuth, loggedIn, setLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
