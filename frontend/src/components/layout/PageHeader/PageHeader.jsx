import {
  PageHeaderContainer,
  Breadcrumb,
  HeaderContent,
  TitleGroup,
  Actions,
  MetaInfo,
} from "./styles";

export function PageHeader({
  title,
  subtitle,
  breadcrumb = [],
  actions,
  meta,
}) {
  return (
    <PageHeaderContainer>
      {breadcrumb.length > 0 && (
        <Breadcrumb>
          {breadcrumb.map((item, index) => (
            <span key={index}>
              {item}
              {index < breadcrumb.length - 1 && <strong>/</strong>}
            </span>
          ))}
        </Breadcrumb>
      )}

      <HeaderContent>
        <TitleGroup>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}

          {meta && <MetaInfo>{meta}</MetaInfo>}
        </TitleGroup>

        {actions && <Actions>{actions}</Actions>}
      </HeaderContent>
    </PageHeaderContainer>
  );
}
