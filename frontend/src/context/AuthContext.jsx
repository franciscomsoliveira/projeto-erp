import { createContext, useContext, useEffect, useRef, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

const TEMPO_INATIVO = 2 * 60 * 60 * 1000; // 2 horas

export function AuthProvider({ children }) {
  const timeoutRef = useRef(null);

  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("@erp:user");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("@erp:token");
  });

  function logout() {
    localStorage.removeItem("@erp:token");
    localStorage.removeItem("@erp:user");

    setToken(null);
    setUser(null);
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

  async function login({ login, senha, codigo_loja }) {
    const response = await api.post("/auth/login", {
      login,
      senha,
      codigo_loja,
    });

    const { token, usuario } = response.data;

    localStorage.setItem("@erp:token", token);
    localStorage.setItem("@erp:user", JSON.stringify(usuario));

    setToken(token);
    setUser(usuario);

    return usuario;
  }

  return (
    <AuthContext.Provider
      value={{ user, token, signed: !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
