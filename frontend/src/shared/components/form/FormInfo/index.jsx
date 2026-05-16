import { Container } from "./styles";

export function FormInfo({ children }) {
  if (!children) return null;

  return <Container>{children}</Container>;
}
