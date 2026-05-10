import { HelperText } from "./styles";

export function FormHelperText({ children }) {
  if (!children) return null;
  return <HelperText>{children}</HelperText>;
}
