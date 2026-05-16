import { tokenStorage } from "../../storage/token.storage";

export function setupAuthInterceptor(api) {
  api.interceptors.request.use(
    (config) => {
      const token = tokenStorage.get();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },

    (error) => Promise.reject(error),
  );
}
