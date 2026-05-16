import { tokenStorage } from "../../storage/token.storage";

import { userStorage } from "../../storage/user.storage";

export function setupResponseInterceptor(api) {
  api.interceptors.response.use(
    (response) => response,

    (error) => {
      if (error.response?.status === 401) {
        tokenStorage.remove();

        userStorage.remove();

        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }

      return Promise.reject(error);
    },
  );
}
