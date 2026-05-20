import { Card } from "./Card";

export function createCardVariant(config) {
  return function CardVariant({
    children,
    variant = config.variant,
    hoverable = config.hoverable,
    padding = config.padding,
    ...props
  }) {
    return (
      <Card
        variant={variant}
        hoverable={hoverable}
        padding={padding}
        {...props}
      >
        {children}
      </Card>
    );
  };
}
