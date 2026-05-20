import { Breadcrumb } from "@/shared/components/navigation/Breadcrumb";

import {
  Container,
  HeaderContent,
  TextArea,
  Title,
  Subtitle,
  Meta,
  Actions,
} from "./styles";

export function PageHeader({ title, subtitle, breadcrumb, meta, actions }) {
  return (
    <Container>
      <Breadcrumb items={breadcrumb} />

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
