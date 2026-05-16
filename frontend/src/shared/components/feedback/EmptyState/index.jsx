import * as Fi from "react-icons/fi";

import { Container, IconBox, Title, Description, Actions } from "./styles";

export function EmptyState({
  icon = <Fi.FiInbox />,
  title = "Nenhum registro encontrado",
  description = "Ainda não existem dados para exibir.",
  actions,
}) {
  return (
    <Container>
      <IconBox>{icon}</IconBox>

      <Title>{title}</Title>

      {description && <Description>{description}</Description>}

      {actions && <Actions>{actions}</Actions>}
    </Container>
  );
}
