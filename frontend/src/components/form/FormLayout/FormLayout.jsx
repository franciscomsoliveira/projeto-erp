import { FiArrowLeft, FiSave, FiX } from "react-icons/fi";
import { Button, Card, Divider } from "../../ui";
import {
  Actions,
  Body,
  Container,
  Content,
  Description,
  Footer,
  Header,
  HeaderActions,
  HeaderContent,
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  Title,
} from "./styles";

export function FormLayout({
  title,
  description,
  children,
  actions,
  footer,
  onBack,
  backLabel = "Voltar",
  maxWidth = "980px",
}) {
  return (
    <Container $maxWidth={maxWidth}>
      <Header>
        <HeaderContent>
          {onBack && (
            <Button variant="ghost" size="sm" leftIcon={<FiArrowLeft />} onClick={onBack}>
              {backLabel}
            </Button>
          )}

          <div>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </div>
        </HeaderContent>

        {actions && <HeaderActions>{actions}</HeaderActions>}
      </Header>

      <Content>{children}</Content>

      {footer && <Footer>{footer}</Footer>}
    </Container>
  );
}

export function FormSection({ title, description, children, actions }) {
  return (
    <Card>
      {(title || description || actions) && (
        <>
          <SectionHeader>
            <div>
              {title && <SectionTitle>{title}</SectionTitle>}
              {description && <SectionDescription>{description}</SectionDescription>}
            </div>

            {actions && <Actions>{actions}</Actions>}
          </SectionHeader>
          <Divider margin="0" />
        </>
      )}

      <Section>{children}</Section>
    </Card>
  );
}

export function FormBody({ children }) {
  return <Body>{children}</Body>;
}

export function FormFooter({
  children,
  onCancel,
  onSubmit,
  cancelLabel = "Cancelar",
  submitLabel = "Salvar",
  loading = false,
  disabled = false,
}) {
  if (children) return <Footer>{children}</Footer>;

  return (
    <Footer>
      {onCancel && (
        <Button variant="secondary" leftIcon={<FiX />} onClick={onCancel} disabled={loading}>
          {cancelLabel}
        </Button>
      )}

      <Button
        type={onSubmit ? "button" : "submit"}
        variant="primary"
        leftIcon={<FiSave />}
        onClick={onSubmit}
        loading={loading}
        disabled={disabled}
      >
        {submitLabel}
      </Button>
    </Footer>
  );
}
