import { Container } from "./styles";

export function FormSuccess({ children }) {
  if (!children) return null;

  return <Container>{children}</Container>;
}
