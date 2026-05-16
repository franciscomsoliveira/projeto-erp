import * as Fi from "react-icons/fi";
import { Input } from "../Input";

export function InputPhone(props) {
  return (
    <Input
      label="Telefone"
      placeholder="(00) 00000-0000"
      inputMode="tel"
      leftIcon={<Fi.FiPhone />}
      maxLength={15}
      {...props}
    />
  );
}
