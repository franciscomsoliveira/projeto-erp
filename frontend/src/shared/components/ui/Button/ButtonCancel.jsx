import * as Fi from "react-icons/fi";

import { Button } from "./Button";

export function ButtonCancel({ children = "Cancelar", ...props }) {
  return (
    <Button variant="secondary" leftIcon={<Fi.FiX />} {...props}>
      {children}
    </Button>
  );
}
