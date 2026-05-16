import * as Fi from "react-icons/fi";
import { Input } from "../Input";

export function InputPercent(props) {
  return (
    <Input
      type="text"
      inputMode="decimal"
      label="Percentual"
      placeholder="0%"
      leftIcon={<Fi.FiPercent />}
      {...props}
    />
  );
}
