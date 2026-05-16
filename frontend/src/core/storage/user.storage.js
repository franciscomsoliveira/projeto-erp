import { AUTH_KEYS } from "../auth/auth.constants";

import { getStorageJson } from "../utils/storage.utils";

export const userStorage = {
  get() {
    return getStorageJson(AUTH_KEYS.USER);
  },

  getTemp() {
    return getStorageJson(AUTH_KEYS.TEMP_USER);
  },

  set(user) {
    localStorage.setItem(AUTH_KEYS.USER, JSON.stringify(user));
  },

  setTemp(user) {
    localStorage.setItem(AUTH_KEYS.TEMP_USER, JSON.stringify(user));
  },

  remove() {
    localStorage.removeItem(AUTH_KEYS.USER);

    localStorage.removeItem(AUTH_KEYS.TEMP_USER);
  },
};
