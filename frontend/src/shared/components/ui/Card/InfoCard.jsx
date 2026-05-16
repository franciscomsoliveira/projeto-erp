import { InfoContainer, InfoTitle, InfoText } from "./styles";

export function InfoCard({ title, children, variant = "default" }) {
  return (
    <InfoContainer $variant={variant}>
      {title && <InfoTitle>{title}</InfoTitle>}
      <InfoText>{children}</InfoText>
    </InfoContainer>
  );
}
