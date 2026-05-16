import {
  StatContainer,
  StatIcon,
  StatContent,
  StatLabel,
  StatValue,
  StatMeta,
} from "./styles";

export function StatCard({ label, value, meta, icon, variant = "default" }) {
  return (
    <StatContainer $variant={variant}>
      {icon && <StatIcon>{icon}</StatIcon>}

      <StatContent>
        <StatLabel>{label}</StatLabel>
        <StatValue>{value}</StatValue>
        {meta && <StatMeta>{meta}</StatMeta>}
      </StatContent>
    </StatContainer>
  );
}
