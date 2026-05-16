import { Message, IconBox, Content, Title, Text } from "./styles";

export function InlineMessage({ variant = "info", icon, title, children }) {
  return (
    <Message $variant={variant}>
      {icon && <IconBox>{icon}</IconBox>}

      <Content>
        {title && <Title>{title}</Title>}
        {children && <Text>{children}</Text>}
      </Content>
    </Message>
  );
}
