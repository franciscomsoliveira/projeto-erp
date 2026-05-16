import { Input } from "../Input";

export function InputCNPJ(props) {
  return (
    <Input
      label="CNPJ"
      placeholder="00.000.000/0000-00"
      inputMode="numeric"
      maxLength={18}
      {...props}
    />
  );
}
