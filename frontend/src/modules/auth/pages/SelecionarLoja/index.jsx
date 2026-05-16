import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/core/auth";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  ButtonLogin,
} from "@/shared/components/ui";

import { FormError } from "@/shared/components/form";

import { Container, LojaList, LojaCard, LojaInfo } from "./styles";

export function SelecionarLoja() {
  const navigate = useNavigate();

  const { tempUser, selecionarLoja } = useAuth();

  const [loadingLojaId, setLoadingLojaId] = useState(null);
  const [erro, setErro] = useState("");

  async function handleSelecionarLoja(id) {
    try {
      setErro("");
      setLoadingLojaId(id);

      await selecionarLoja(id);

      navigate("/dashboard");
    } catch (error) {
      setErro(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Não foi possível selecionar a loja.",
      );
    } finally {
      setLoadingLojaId(null);
    }
  }

  return (
    <Container>
      <Card style={{ width: "100%", maxWidth: 600 }}>
        <CardHeader>
          <CardTitle>Selecionar loja</CardTitle>

          <CardDescription>
            Escolha a unidade que deseja acessar neste momento
          </CardDescription>
        </CardHeader>

        <CardContent>
          <FormError>{erro}</FormError>

          <LojaList>
            {tempUser?.lojas?.map((loja) => {
              const lojaId = loja.id || loja.loja_id;

              return (
                <LojaCard key={lojaId || loja.codigo_loja}>
                  <LojaInfo>
                    <strong>{loja.nome_fantasia}</strong>

                    {loja.codigo_loja && <span>{loja.codigo_loja}</span>}
                  </LojaInfo>

                  <ButtonLogin
                    type="button"
                    loading={loadingLojaId === lojaId}
                    disabled={loadingLojaId && loadingLojaId !== lojaId}
                    onClick={() => handleSelecionarLoja(lojaId)}
                  >
                    Selecionar
                  </ButtonLogin>
                </LojaCard>
              );
            })}
          </LojaList>
        </CardContent>
      </Card>
    </Container>
  );
}
