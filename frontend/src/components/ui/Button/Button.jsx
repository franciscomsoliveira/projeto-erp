import { Spinner, StyledButton } from "./styles";

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  type = "button",
  ...props
}) {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner />}
      {!loading && leftIcon && <span>{leftIcon}</span>}
      <span>{loading ? "Carregando..." : children}</span>
      {!loading && rightIcon && <span>{rightIcon}</span>}
    </StyledButton>
  );
}
