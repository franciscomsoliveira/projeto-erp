import { ButtonContent, Spinner, StyledButton } from "./styles";

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
      aria-busy={loading}
      aria-disabled={disabled || loading}
      data-variant={variant}
      {...props}
    >
      <ButtonContent>
        {loading ? (
          <>
            <Spinner />
            {loadingText}
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </ButtonContent>
    </StyledButton>
  );
}
