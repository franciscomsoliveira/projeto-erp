import { Row } from "./styles";

export function FormRow({ children, align = "start", justify = "start", gap = "12px", wrap = true }) {
  return (
    <Row $align={align} $justify={justify} $gap={gap} $wrap={wrap}>
      {children}
    </Row>
  );
}
