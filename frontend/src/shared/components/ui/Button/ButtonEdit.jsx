import * as Fi from "react-icons/fi";

import { Button } from "./Button";

export function ButtonEdit({ children = "Editar", ...props }) {
  return (
    <Button variant="outline" leftIcon={<Fi.FiEdit2 />} {...props}>
      {children}
    </Button>
  );
}
