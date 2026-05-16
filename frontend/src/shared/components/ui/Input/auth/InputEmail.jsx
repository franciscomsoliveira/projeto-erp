import * as Fi from "react-icons/fi";
import { Input } from "../Input";

export function InputEmail(props) {
  return (
    <Input
      type="email"
      label="E-mail"
      placeholder="Digite seu e-mail"
      leftIcon={<Fi.FiMail />}
      autoComplete="email"
      {...props}
    />
  );
}
