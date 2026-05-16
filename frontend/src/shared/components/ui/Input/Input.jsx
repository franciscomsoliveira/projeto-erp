import {
  Container,
  Label,
  InputWrapper,
  StyledInput,
  IconBox,
  ErrorText,
  HelperText,
} from "./styles";

export function Input({
  id,
  name,
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = true,
  maxWidth,
  size = "md",
  disabled = false,
  type = "text",
  ...props
}) {
  const inputId = id || name;

  return (
    <Container $fullWidth={fullWidth} $maxWidth={maxWidth}>
      {label && <Label htmlFor={inputId}>{label}</Label>}

      <InputWrapper $size={size} $hasError={!!error} $disabled={disabled}>
        {leftIcon && <IconBox>{leftIcon}</IconBox>}

        <StyledInput
          id={inputId}
          name={name}
          type={type}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error || helperText ? `${inputId}-message` : undefined
          }
          {...props}
        />

        {rightIcon && <IconBox>{rightIcon}</IconBox>}
      </InputWrapper>

      {error ? (
        <ErrorText id={`${inputId}-message`}>{error}</ErrorText>
      ) : helperText ? (
        <HelperText id={`${inputId}-message`}>{helperText}</HelperText>
      ) : null}
    </Container>
  );
}
