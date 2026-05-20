import { tokenStorage } from "../../storage/token.storage";
import { userStorage } from "../../storage/user.storage";

export function setupResponseInterceptor(api) {
  api.interceptors.response.use(
    (response) => response,

    (error) => {
      if (error.response?.status === 401) {
        const temTokenPrincipal = !!tokenStorage.getMain();

        // Só faz logout total se era uma sessão principal
        if (temTokenPrincipal) {
          tokenStorage.remove();
          userStorage.remove();

          if (window.location.pathname !== "/login") {
            window.location.href = "/login";
          }
        }

        // Se era sessão temporária, deixa o erro subir normalmente
        // o AuthContext e a página de seleção de loja tratam
      }

      return Promise.reject(error);
    },
  );
}
