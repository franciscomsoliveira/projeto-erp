import { Input } from "../Input";

export function InputCPF(props) {
  return (
    <Input
      label="CPF"
      placeholder="000.000.000-00"
      inputMode="numeric"
      maxLength={14}
      {...props}
    />
  );
}
