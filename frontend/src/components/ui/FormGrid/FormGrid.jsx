import { Grid, Row, Field } from "./styles";
export function FormGrid({ children, columns = 2, gap = "md" }) {return <Grid $columns={columns} $gap={gap}>{children}</Grid>}
export function FormRow({ children, gap = "md" }) {return <Row $gap={gap}>{children}</Row>}
export function FormField({ children, span = 1 }) {return <Field $span={span}>{children}</Field>}
