import { Label, RequiredMark } from "./styles";

export function FormLabel({ children, htmlFor, required = false }) {
  if (!children) return null;

  return (
    <Label htmlFor={htmlFor}>
      {children}
      {required && <RequiredMark>*</RequiredMark>}
    </Label>
  );
}
