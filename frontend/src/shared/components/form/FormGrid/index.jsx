import { Grid } from "./styles";

export function FormGrid({ children, columns = 2, gap = "md" }) {
  return (
    <Grid $columns={columns} $gap={gap}>
      {children}
    </Grid>
  );
}
