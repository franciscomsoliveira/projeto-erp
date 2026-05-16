import * as Fi from "react-icons/fi";

import { Button } from "./Button";

export function ButtonDelete({
  children = "Excluir",
  loadingText = "Excluindo...",
  ...props
}) {
  return (
    <Button
      variant="danger"
      leftIcon={<Fi.FiTrash2 />}
      loadingText={loadingText}
      {...props}
    >
      {children}
    </Button>
  );
}
