import { Actions } from "./styles";

export function FormActions({ children, align = "end", sticky = false }) {
  return (
    <Actions $align={align} $sticky={sticky}>
      {children}
    </Actions>
  );
}
