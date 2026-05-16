import * as Fi from "react-icons/fi";

import { Button } from "./Button";

export function ButtonClear({ children = "Limpar", ...props }) {
  return (
    <Button variant="ghost" leftIcon={<Fi.FiRefreshCw />} {...props}>
      {children}
    </Button>
  );
}
