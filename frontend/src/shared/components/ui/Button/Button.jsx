import { Spinner, StyledButton, ButtonContent } from "./styles";

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  loadingText = "Carregando...",
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

      <ButtonContent>
        {!loading && leftIcon}
        {loading ? loadingText : children}
        {!loading && rightIcon}
      </ButtonContent>
    </StyledButton>
  );
}
