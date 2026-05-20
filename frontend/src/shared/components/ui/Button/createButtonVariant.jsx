import { Button } from "./Button";

export function createButtonVariant(config) {
  return function ButtonVariant({
    children = config.label,
    loadingText = config.loadingText || "Carregando...",
    leftIcon,
    variant = config.variant,
    ...props
  }) {
    const Icon = config.icon;

    return (
      <Button
        variant={variant}
        leftIcon={leftIcon ?? (Icon ? <Icon /> : null)}
        loadingText={loadingText}
        {...props}
      >
        {children}
      </Button>
    );
  };
}
