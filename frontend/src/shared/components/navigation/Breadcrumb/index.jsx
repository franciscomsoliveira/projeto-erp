import { FiChevronRight } from "react-icons/fi";

import { useBreadcrumb } from "@/shared/hooks/useBreadcrumb";

import { Container, Item, Separator, CurrentItem } from "./styles";

export function Breadcrumb({ items: itemsProp }) {
  const { items: itemsFromRoute } = useBreadcrumb();

  const items = itemsProp ?? itemsFromRoute;

  if (!items.length) return null;

  return (
    <nav aria-label="Navegação estrutural">
      <Container>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <span key={`${item}-${index}`} style={{ display: "contents" }}>
              {isLast ? (
                <CurrentItem aria-current="page">{item}</CurrentItem>
              ) : (
                <Item>{item}</Item>
              )}

              {!isLast && (
                <Separator aria-hidden="true">
                  <FiChevronRight />
                </Separator>
              )}
            </span>
          );
        })}
      </Container>
    </nav>
  );
}
