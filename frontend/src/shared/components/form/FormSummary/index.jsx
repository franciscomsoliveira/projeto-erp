import {
  SummaryContainer,
  SummaryItem,
  SummaryLabel,
  SummaryValue,
} from "./styles";

export function FormSummary({ items = [] }) {
  return (
    <SummaryContainer>
      {items.map((item) => (
        <SummaryItem key={item.label}>
          <SummaryLabel>{item.label}</SummaryLabel>

          <SummaryValue>{item.value}</SummaryValue>
        </SummaryItem>
      ))}
    </SummaryContainer>
  );
}
