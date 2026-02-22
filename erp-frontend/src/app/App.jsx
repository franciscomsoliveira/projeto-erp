import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../core/auth/AuthContext";
import AppRoutes from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
