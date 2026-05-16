import {
  Container,
  Breadcrumb,
  HeaderContent,
  TextArea,
  Title,
  Subtitle,
  Meta,
  Actions,
} from "./styles";

export function PageHeader({
  title,
  subtitle,
  breadcrumb = [],
  meta,
  actions,
}) {
  return (
    <Container>
      {breadcrumb.length > 0 && (
        <Breadcrumb>
          {breadcrumb.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              {index < breadcrumb.length - 1 && " / "}
            </span>
          ))}
        </Breadcrumb>
      )}

      <HeaderContent>
        <TextArea>
          <Title>{title}</Title>

          {subtitle && <Subtitle>{subtitle}</Subtitle>}

          {meta && <Meta>{meta}</Meta>}
        </TextArea>

        {actions && <Actions>{actions}</Actions>}
      </HeaderContent>
    </Container>
  );
}
