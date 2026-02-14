import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verifica se já existe um usuário logado ao carregar a página
  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  async function login(email, senha) {
    try {
      console.log("Iniciando tentativa de login para:", email);

      // Chamada à API
      const { data } = await api.post("/auth/login", { email, senha });

      console.log("Login bem-sucedido! Dados recebidos:", data);

      // Salva no LocalStorage para persistência
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Atualiza o estado global
      setUser(data.user);
    } catch (error) {
      console.error("❌ Erro detalhado na requisição:");

      if (error.response) {
        // O servidor respondeu com um status fora da faixa 2xx
        console.error("Status:", error.response.status);
        console.error("Mensagem do Servidor:", error.response.data);

        // Lança uma mensagem amigável para o componente de Login
        throw new Error(error.response.data.error || "Credenciais inválidas");
      } else if (error.request) {
        // A requisição foi feita mas não houve resposta (Erro de rede/CORS)
        console.error(
          "O servidor não respondeu. Verifique se o backend está rodando na porta 3333.",
        );
        throw new Error("Servidor offline ou erro de rede.");
      } else {
        console.error("Erro ao configurar a requisição:", error.message);
        throw error;
      }
    }
  }

  function logout() {
    console.log("Encerrando sessão...");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
