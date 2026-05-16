import * as Fi from "react-icons/fi";

import { Button } from "./Button";

export function ButtonLogin({
  children = "Entrar",
  loadingText = "Entrando...",
  ...props
}) {
  return (
    <Button
      variant="primary"
      leftIcon={<Fi.FiLogIn />}
      loadingText={loadingText}
      {...props}
    >
      {children}
    </Button>
  );
}
