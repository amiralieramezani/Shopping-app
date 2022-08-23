import { createContext, useContext, useEffect, useState } from "react";

export const AuthProviderContext = createContext();

export const AuthProviderContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

function AuthProvider({ children }) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY))
  );

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
    setState(userData);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
  }, [state]);

  return (
    <AuthProviderContext.Provider value={state}>
      <AuthProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);

export const useAuthActions = () => useContext(AuthProviderContextDispatcher);
