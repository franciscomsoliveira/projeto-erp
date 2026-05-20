import { AUTH_KEYS } from "../auth/auth.constants";

export const tokenStorage = {
  get() {
    return (
      localStorage.getItem(AUTH_KEYS.TOKEN) ||
      localStorage.getItem(AUTH_KEYS.TEMP_TOKEN)
    );
  },

  getMain() {
    return localStorage.getItem(AUTH_KEYS.TOKEN);
  },

  getTemp() {
    return localStorage.getItem(AUTH_KEYS.TEMP_TOKEN);
  },

  set(token) {
    localStorage.setItem(AUTH_KEYS.TOKEN, token);
  },

  setTemp(token) {
    localStorage.setItem(AUTH_KEYS.TEMP_TOKEN, token);
  },

  removeMain() {
    localStorage.removeItem(AUTH_KEYS.TOKEN);
  },

  removeTemp() {
    localStorage.removeItem(AUTH_KEYS.TEMP_TOKEN);
  },

  remove() {
    tokenStorage.removeMain();
    tokenStorage.removeTemp();
  },
};
