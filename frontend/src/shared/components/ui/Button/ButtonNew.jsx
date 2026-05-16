import * as Fi from "react-icons/fi";

import { Button } from "./Button";

export function ButtonNew({ children = "Novo", ...props }) {
  return (
    <Button variant="primary" leftIcon={<Fi.FiPlus />} {...props}>
      {children}
    </Button>
  );
}
