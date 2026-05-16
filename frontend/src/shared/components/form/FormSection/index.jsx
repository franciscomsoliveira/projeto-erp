import {
  Section,
  SectionHeader,
  SectionText,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from "./styles";

export function FormSection({ title, description, children, actions }) {
  return (
    <Section>
      {(title || description || actions) && (
        <SectionHeader>
          <SectionText>
            {title && <SectionTitle>{title}</SectionTitle>}
            {description && (
              <SectionDescription>{description}</SectionDescription>
            )}
          </SectionText>

          {actions}
        </SectionHeader>
      )}

      <SectionContent>{children}</SectionContent>
    </Section>
  );
}
