import { Form } from "./styles";

export function EntityForm({ children, onSubmit, noValidate = true }) {
  return (
    <Form onSubmit={onSubmit} noValidate={noValidate}>
      {children}
    </Form>
  );
}
