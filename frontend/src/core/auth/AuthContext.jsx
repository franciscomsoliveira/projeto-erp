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
    tokenStorage.remove(); // limpa tudo — correto aqui
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
    const response = await authService.login({ login, senha });

    const { token, tempToken, usuario, needsStoreSelection } = response;

    if (needsStoreSelection) {
      tokenStorage.setTemp(tempToken);
      userStorage.setTemp(usuario);

      tokenStorage.removeMain();
      userStorage.removeMain();

      setToken(null);
      setUser(null);
      setTempUser(usuario);

      return response;
    }

    tokenStorage.set(token);
    userStorage.set(usuario);

    tokenStorage.removeTemp();
    userStorage.removeTemp();

    setToken(token);
    setUser(usuario);
    setTempUser(null);

    return response;
  }

  async function selecionarLoja(lojaId) {
    const response = await authService.selecionarLoja(lojaId);
    tokenStorage.set(response.token);
    userStorage.set(response.usuario);
    tokenStorage.removeTemp(); // ← intenção explícita
    userStorage.removeTemp(); // ← intenção explícita
    setToken(response.token);
    setUser(response.usuario);
    setTempUser(null);
    return response;
  }

  async function trocarLoja(lojaId) {
    const response = await authService.trocarLoja(lojaId);

    tokenStorage.set(response.token);
    userStorage.set(response.usuario);

    tokenStorage.removeTemp();
    userStorage.removeTemp();

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
        trocarLoja,
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
