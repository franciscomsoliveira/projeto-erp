import * as Fi from "react-icons/fi";

import { Button } from "./Button";

export function ButtonSearch({
  children = "Buscar",
  loadingText = "Buscando...",
  ...props
}) {
  return (
    <Button
      variant="secondary"
      leftIcon={<Fi.FiSearch />}
      loadingText={loadingText}
      {...props}
    >
      {children}
    </Button>
  );
}
