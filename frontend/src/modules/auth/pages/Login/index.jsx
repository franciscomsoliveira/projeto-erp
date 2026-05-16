import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "@/core/auth";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  ButtonLogin,
  InputLogin,
  InputPassword,
} from "@/shared/components/ui";

import { FormActions, FormError } from "@/shared/components/form";

import { Container, LoginForm, Footer } from "./styles";

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [usuarioLogin, setUsuarioLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setErro("");
      setLoading(true);

      const response = await login({
        login: usuarioLogin.trim(),
        senha,
      });

      if (response.needsStoreSelection) {
        navigate("/selecionar-loja");
        return;
      }

      navigate("/dashboard");
    } catch (error) {
      setErro(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Erro ao conectar",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Card style={{ width: "100%", maxWidth: 420 }}>
        <CardHeader>
          <CardTitle>ERP</CardTitle>
          <CardDescription>Acesse sua conta para continuar</CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm onSubmit={handleLogin}>
            <InputLogin
              name="login"
              value={usuarioLogin}
              onChange={(e) => setUsuarioLogin(e.target.value)}
              disabled={loading}
            />

            <InputPassword
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              disabled={loading}
            />

            <FormError>{erro}</FormError>

            <FormActions align="stretch">
              <ButtonLogin type="submit" loading={loading} fullWidth />
            </FormActions>

            <Footer>
              <Link to="/esqueci-senha">Esqueci minha senha</Link>
            </Footer>
          </LoginForm>
        </CardContent>
      </Card>
    </Container>
  );
}
