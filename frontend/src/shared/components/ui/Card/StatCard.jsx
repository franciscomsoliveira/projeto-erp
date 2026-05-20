import {
  StatContainer,
  StatIcon,
  StatContent,
  StatLabel,
  StatValue,
  StatMeta,
} from "./styles";

export function StatCard({
  label,
  value,
  meta,
  icon,
  variant = "default",
  hoverable = true,
}) {
  return (
    <StatContainer
      $variant={variant}
      $hoverable={hoverable}
      data-variant={variant}
    >
      {icon && <StatIcon>{icon}</StatIcon>}

      <StatContent>
        <StatLabel>{label}</StatLabel>
        <StatValue>{value}</StatValue>
        {meta && <StatMeta>{meta}</StatMeta>}
      </StatContent>
    </StatContainer>
  );
}
