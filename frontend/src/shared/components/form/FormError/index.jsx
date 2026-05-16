import { ErrorBox } from "./styles";

export function FormError({ children }) {
  if (!children) return null;

  return <ErrorBox>{children}</ErrorBox>;
}
