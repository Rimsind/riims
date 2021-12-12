import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "./authReducer";
import { parseCookies } from "nookies";

export const GlobalContext = createContext();

const initialState = {
  loading: false,
  token: null,
  user: null,
  error: null,
};

const GlobalProvider = ({ children }) => {
  const [auth, dispatchAuth] = useReducer(authReducer, initialState);

  useEffect(() => {
    async function loadUserFromCookies() {
      const { token, user } = parseCookies();
      if (!!token && !!user) {
        auth.token = token;
        auth.user = JSON.parse(user);
      }
    }
    loadUserFromCookies();
  }, []);

  return (
    <GlobalContext.Provider value={{ auth, dispatchAuth }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useAuth = () => useContext(GlobalContext);

export default GlobalProvider;
