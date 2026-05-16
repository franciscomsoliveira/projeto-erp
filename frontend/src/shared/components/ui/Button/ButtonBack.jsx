import * as Fi from "react-icons/fi";

import { Button } from "./Button";

export function ButtonBack({ children = "Voltar", ...props }) {
  return (
    <Button variant="ghost" leftIcon={<Fi.FiArrowLeft />} {...props}>
      {children}
    </Button>
  );
}
