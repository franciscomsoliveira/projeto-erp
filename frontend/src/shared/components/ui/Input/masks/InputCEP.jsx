import { Input } from "../Input";

export function InputCEP(props) {
  return (
    <Input
      label="CEP"
      placeholder="00000-000"
      inputMode="numeric"
      maxLength={9}
      {...props}
    />
  );
}
