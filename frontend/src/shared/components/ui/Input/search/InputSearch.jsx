import * as Fi from "react-icons/fi";
import { Input } from "../Input";

export function InputSearch(props) {
  return (
    <Input
      type="search"
      placeholder="Buscar..."
      leftIcon={<Fi.FiSearch />}
      {...props}
    />
  );
}
