import { Header, Text, Title, Description, Actions } from "./styles";

export function FormHeader({ title, description, actions }) {
  return (
    <Header>
      <Text>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </Text>

      {actions && <Actions>{actions}</Actions>}
    </Header>
  );
}
