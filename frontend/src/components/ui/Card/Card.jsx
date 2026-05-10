import { Container, Header, Title, Content, Footer } from "./styles";
export function Card({ children, title, actions, footer, clickable = false, ...props }) {
  return <Container $clickable={clickable} {...props}>{(title || actions) && <Header>{title && <Title>{title}</Title>}{actions}</Header>}<Content>{children}</Content>{footer && <Footer>{footer}</Footer>}</Container>;
}
