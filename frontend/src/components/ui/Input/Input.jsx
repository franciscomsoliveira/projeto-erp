import { Container, Label, InputWrapper, StyledInput, IconBox, ErrorText, HelperText } from "./styles";

export function Input({ label, error, helperText, leftIcon, rightIcon, fullWidth = true, maxWidth, size = "md", disabled = false, type = "text", ...props }) {
  return (
    <Container $fullWidth={fullWidth} style={{ maxWidth }}>
      {label && <Label>{label}</Label>}
      <InputWrapper $size={size} $hasError={!!error} $disabled={disabled}>
        {leftIcon && <IconBox>{leftIcon}</IconBox>}
        <StyledInput type={type} disabled={disabled} {...props} />
        {rightIcon && <IconBox>{rightIcon}</IconBox>}
      </InputWrapper>
      {error ? <ErrorText>{error}</ErrorText> : helperText ? <HelperText>{helperText}</HelperText> : null}
    </Container>
  );
}
