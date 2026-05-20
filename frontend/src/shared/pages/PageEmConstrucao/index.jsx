import { FiTool } from "react-icons/fi";

import { PageHeader } from "../../components/navigation";

import { Card } from "@/shared/components/ui";

import { Container, IconWrapper, Title, Description } from "./styles";

export default function PageEmConstrucao() {
  return (
    <>
      <PageHeader
        title="Em Construção"
        subtitle="Estamos trabalhando para trazer esta funcionalidade em breve."
      />

      <Card>
        <Container>
          <IconWrapper>
            <FiTool />
          </IconWrapper>

          <Title>Estamos preparando esta funcionalidade</Title>

          <Description>
            Este módulo fará parte da próxima etapa do ERP.
          </Description>
        </Container>
      </Card>
    </>
  );
}
