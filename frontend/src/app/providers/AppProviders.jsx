import { AuthProvider } from "@/core/auth";
import { AppThemeProvider } from "@/core/theme";

export function AppProviders({ children }) {
  return (
    <AppThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppThemeProvider>
  );
}
