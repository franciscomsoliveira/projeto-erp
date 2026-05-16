import { Badge } from "./styles";

export function FormStatusBadge({ status = "default", children }) {
  return <Badge $status={status}>{children}</Badge>;
}
