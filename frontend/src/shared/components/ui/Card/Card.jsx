import { CardContainer } from "./styles";

export function Card({
  children,
  variant = "default",
  clickable = false,
  hoverable = false,
  fullHeight = false,
  padding = "md",
  ...props
}) {
  return (
    <CardContainer
      $variant={variant}
      $clickable={clickable}
      $hoverable={hoverable}
      $fullHeight={fullHeight}
      $padding={padding}
      {...props}
    >
      {children}
    </CardContainer>
  );
}
