import { Container } from "./styles";

export function FormWarning({ children }) {
  if (!children) return null;

  return <Container>{children}</Container>;
}
