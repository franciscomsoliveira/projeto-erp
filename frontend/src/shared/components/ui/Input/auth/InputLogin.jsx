import * as Fi from "react-icons/fi";
import { Input } from "../Input";

export function InputLogin(props) {
  return (
    <Input
      label="Login"
      placeholder="Digite seu login"
      leftIcon={<Fi.FiUser />}
      autoComplete="username"
      {...props}
    />
  );
}
