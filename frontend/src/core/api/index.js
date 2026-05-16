import { apiClient } from "./client";

import { setupAuthInterceptor } from "./interceptors/auth.interceptor";

import { setupResponseInterceptor } from "./interceptors/response.interceptor";

// import { setupLoggerInterceptor } from "./interceptors/logger.interceptor";

setupAuthInterceptor(apiClient);

setupResponseInterceptor(apiClient);

// setupLoggerInterceptor(apiClient);

export { apiClient };
