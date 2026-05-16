import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  InputEmail,
  Button,
} from "@/shared/components/ui";

import { FormActions, FormSuccess, FormError } from "@/shared/components/form";

import { Container, Form, Footer } from "./styles";

export function EsqueciSenha() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErro("");
      setSucesso("");

      setLoading(true);

      console.log(email);

      setSucesso(
        "Se o e-mail existir no sistema, enviaremos as instruções de recuperação.",
      );
    } catch (error) {
      setErro("Não foi possível enviar a recuperação.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Card style={{ width: "100%", maxWidth: 420 }}>
        <CardHeader>
          <CardTitle>Recuperar senha</CardTitle>

          <CardDescription>
            Informe seu e-mail para receber as instruções de recuperação
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form onSubmit={handleSubmit}>
            <InputEmail
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <FormError>{erro}</FormError>

            <FormSuccess>{sucesso}</FormSuccess>

            <FormActions align="stretch">
              <Button type="submit" loading={loading} fullWidth>
                Enviar recuperação
              </Button>
            </FormActions>

            <Footer>
              <Link to="/login">Voltar para login</Link>
            </Footer>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
}
