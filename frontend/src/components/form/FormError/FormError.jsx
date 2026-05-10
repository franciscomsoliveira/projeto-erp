import { ErrorText } from "./styles";

export function FormError({ children }) {
  if (!children) return null;
  return <ErrorText role="alert">{children}</ErrorText>;
}
