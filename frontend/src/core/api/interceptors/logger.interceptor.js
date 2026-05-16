export function setupLoggerInterceptor(api) {
  api.interceptors.request.use((config) => {
    console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);

    return config;
  });
}
