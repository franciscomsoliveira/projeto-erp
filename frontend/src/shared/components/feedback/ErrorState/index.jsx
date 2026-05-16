import * as Fi from "react-icons/fi";

import { Container, IconBox, Title, Description, Actions } from "./styles";

export function ErrorState({
  title = "Algo deu errado",
  description = "Não foi possível carregar as informações.",
  actions,
}) {
  return (
    <Container>
      <IconBox>
        <Fi.FiAlertTriangle />
      </IconBox>

      <Title>{title}</Title>

      {description && <Description>{description}</Description>}

      {actions && <Actions>{actions}</Actions>}
    </Container>
  );
}
