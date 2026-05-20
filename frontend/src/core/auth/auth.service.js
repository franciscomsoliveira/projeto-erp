import { apiClient } from "../api";

import { AUTH_KEYS } from "./auth.constants";

import { AUTH_ENDPOINTS } from "../api/endpoints/auth.endpoints";

export const authService = {
  async login(payload) {
    const { data } = await apiClient.post(AUTH_ENDPOINTS.LOGIN, payload);

    return data;
  },

  async selecionarLoja(loja_id) {
    const tempToken = localStorage.getItem(AUTH_KEYS.TEMP_TOKEN);

    const { data } = await apiClient.post(
      AUTH_ENDPOINTS.SELECT_STORE,
      { loja_id },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );

    return data;
  },

  async trocarLoja(loja_id) {
    const { data } = await apiClient.post(AUTH_ENDPOINTS.SWITCH_STORE, {
      loja_id,
    });

    return data;
  },
};
