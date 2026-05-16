import * as Fi from "react-icons/fi";

import { Button } from "./Button";

export function ButtonSave({
  children = "Salvar",
  loadingText = "Salvando...",
  ...props
}) {
  return (
    <Button
      variant="success"
      leftIcon={<Fi.FiSave />}
      loadingText={loadingText}
      {...props}
    >
      {children}
    </Button>
  );
}
