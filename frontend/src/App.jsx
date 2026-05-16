import { AppRoutes } from "@/app/routes";
import { AuthProvider } from "@/core/auth";
import { GlobalStyles } from "@/core/styles";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
