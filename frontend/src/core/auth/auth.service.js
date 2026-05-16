import { apiClient } from "../api";

import { AUTH_ENDPOINTS } from "../api/endpoints/auth.endpoints";

export const authService = {
  async login(payload) {
    const { data } = await apiClient.post(AUTH_ENDPOINTS.LOGIN, payload);

    return data;
  },

  async selecionarLoja(loja_id) {
    const { data } = await apiClient.post(AUTH_ENDPOINTS.SELECT_STORE, {
      loja_id,
    });

    return data;
  },
};
