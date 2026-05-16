import * as Fi from "react-icons/fi";
import { Input } from "../Input";

export function InputCurrency(props) {
  return (
    <Input
      type="text"
      inputMode="decimal"
      label="Valor"
      placeholder="R$ 0,00"
      leftIcon={<Fi.FiDollarSign />}
      {...props}
    />
  );
}
