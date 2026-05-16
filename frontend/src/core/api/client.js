import axios from "axios";

import { ENV } from "../config/env";

import { API_CONFIG } from "./config/api.config";

export const apiClient = axios.create({
  baseURL: ENV.API_URL,

  timeout: API_CONFIG.timeout,

  headers: API_CONFIG.headers,
});
