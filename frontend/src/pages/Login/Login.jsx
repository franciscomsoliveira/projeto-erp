import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { Input, Button, Card, FormGrid, FormField } from "../../components/ui";

import { Container, Wrapper, Logo, ErrorText } from "./styles";

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [codigoLoja, setCodigoLoja] = useState("");
  const [usuarioLogin, setUsuarioLogin] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setErro("");
      setLoading(true);

      await login({
        login: usuarioLogin,
        senha,
        codigo_loja: codigoLoja,
      });

      navigate("/home");
    } catch (error) {
      setErro(error.response?.data?.error || "Erro ao conectar");
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setCodigoLoja("");
    setUsuarioLogin("");
    setSenha("");
    setErro("");
  }

  return (
    <Container>
      <Wrapper>
        <Logo>
          <strong>FlowERP</strong>
          <span>Debian System</span>
        </Logo>

        <Card title="Acesso ao sistema">
          <form onSubmit={handleLogin}>
            <FormGrid columns={1}>
              <FormField>
                <Input
                  label="Código da Loja"
                  placeholder="Ex: FC-001"
                  value={codigoLoja}
                  onChange={(e) => setCodigoLoja(e.target.value.toUpperCase())}
                />
              </FormField>

              <FormField>
                <Input
                  label="Login ou E-mail"
                  placeholder="Digite seu login ou e-mail"
                  value={usuarioLogin}
                  onChange={(e) => setUsuarioLogin(e.target.value)}
                />
              </FormField>

              <FormField>
                <Input
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </FormField>

              {erro && (
                <FormField>
                  <ErrorText>{erro}</ErrorText>
                </FormField>
              )}

              <FormField>
                <FormGrid columns={2}>
                  <Button
                    type="submit"
                    variant="primary"
                    loading={loading}
                    fullWidth
                  >
                    Conectar
                  </Button>

                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleClear}
                    fullWidth
                  >
                    Limpar
                  </Button>
                </FormGrid>
              </FormField>
            </FormGrid>
          </form>
        </Card>
      </Wrapper>
    </Container>
  );
}
