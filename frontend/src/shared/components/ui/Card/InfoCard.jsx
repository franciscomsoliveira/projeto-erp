import { InfoContainer, InfoTitle, InfoText } from "./styles";

export function InfoCard({
  title,
  children,
  variant = "default",
  hoverable = false,
}) {
  return (
    <InfoContainer
      $variant={variant}
      $hoverable={hoverable}
      data-variant={variant}
    >
      {title && <InfoTitle>{title}</InfoTitle>}
      <InfoText>{children}</InfoText>
    </InfoContainer>
  );
}
