import { createContext, useContext, useEffect, useRef, useState } from "react";

import { authService } from "./auth.service";

import { AUTH_KEYS, TEMPO_INATIVO } from "./auth.constants";

import { tokenStorage } from "../storage/token.storage";

import { userStorage } from "../storage/user.storage";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const timeoutRef = useRef(null);

  const [user, setUser] = useState(() => userStorage.get());

  const [tempUser, setTempUser] = useState(() => userStorage.getTemp());

  const [token, setToken] = useState(() => tokenStorage.getMain());

  function logout() {
    tokenStorage.remove();

    userStorage.remove();

    setToken(null);

    setUser(null);

    setTempUser(null);
  }

  function resetarTimerInatividade() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      logout();
    }, TEMPO_INATIVO);
  }

  useEffect(() => {
    if (!token) return;

    const eventos = ["click", "mousemove", "keydown", "scroll", "touchstart"];

    eventos.forEach((evento) => {
      window.addEventListener(evento, resetarTimerInatividade);
    });

    resetarTimerInatividade();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      eventos.forEach((evento) => {
        window.removeEventListener(evento, resetarTimerInatividade);
      });
    };
  }, [token]);

  async function login({ login, senha }) {
    const response = await authService.login({
      login,
      senha,
    });

    const { token, usuario, needsStoreSelection } = response;

    if (needsStoreSelection) {
      tokenStorage.setTemp(token);

      userStorage.setTemp(usuario);

      localStorage.removeItem(AUTH_KEYS.TOKEN);

      localStorage.removeItem(AUTH_KEYS.USER);

      setToken(null);

      setUser(null);

      setTempUser(usuario);

      return response;
    }

    tokenStorage.set(token);

    userStorage.set(usuario);

    localStorage.removeItem(AUTH_KEYS.TEMP_TOKEN);

    localStorage.removeItem(AUTH_KEYS.TEMP_USER);

    setToken(token);

    setUser(usuario);

    setTempUser(null);

    return response;
  }

  async function selecionarLoja(lojaId) {
    const response = await authService.selecionarLoja(lojaId);

    tokenStorage.set(response.token);

    userStorage.set(response.usuario);

    localStorage.removeItem(AUTH_KEYS.TEMP_TOKEN);

    localStorage.removeItem(AUTH_KEYS.TEMP_USER);

    setToken(response.token);

    setUser(response.usuario);

    setTempUser(null);

    return response;
  }

  const signed = !!token && !!user;

  const needsStoreSelection = !!tempUser && !token;

  return (
    <AuthContext.Provider
      value={{
        signed,
        user,
        token,
        tempUser,
        needsStoreSelection,
        login,
        logout,
        selecionarLoja,
        setTempUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
