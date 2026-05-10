import { Grid } from "./styles";

export function FormGrid({ children, columns = 2, gap = "16px", minWidth = "240px" }) {
  return (
    <Grid $columns={columns} $gap={gap} $minWidth={minWidth}>
      {children}
    </Grid>
  );
}
