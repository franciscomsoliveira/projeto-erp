import {
  CardContainer,
  Header,
  Title,
  Description,
  Actions,
  Content,
  Footer,
} from "./styles";

export function Card({
  children,
  title,
  description,
  actions,
  footer,
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
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? "button" : undefined}
      data-variant={variant}
      {...props}
    >
      {(title || description || actions) && (
        <Header>
          <div>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </div>

          {actions && <Actions>{actions}</Actions>}
        </Header>
      )}

      <Content>{children}</Content>

      {footer && <Footer>{footer}</Footer>}
    </CardContainer>
  );
}
