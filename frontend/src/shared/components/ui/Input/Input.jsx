import {
  Container,
  Label,
  RequiredMark,
  InputWrapper,
  StyledInput,
  IconBox,
  ErrorText,
  HelperText,
  SuccessText,
  Spinner,
} from "./styles";

export function Input({
  id,
  name,
  label,
  error,
  success,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = true,
  maxWidth,
  size = "md",
  disabled = false,
  readOnly = false,
  loading = false,
  required = false,
  type = "text",
  ...props
}) {
  const inputId = id || name;

  const messageId =
    error || success || helperText ? `${inputId}-message` : undefined;

  return (
    <Container $fullWidth={fullWidth} $maxWidth={maxWidth}>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <RequiredMark>*</RequiredMark>}
        </Label>
      )}

      <InputWrapper
        $size={size}
        $hasError={!!error}
        $hasSuccess={!!success}
        $disabled={disabled}
        $readOnly={readOnly}
      >
        {leftIcon && <IconBox>{leftIcon}</IconBox>}

        <StyledInput
          id={inputId}
          name={name}
          type={type}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={!!error}
          aria-describedby={messageId}
          {...props}
        />

        {loading ? (
          <IconBox>
            <Spinner />
          </IconBox>
        ) : (
          rightIcon && <IconBox>{rightIcon}</IconBox>
        )}
      </InputWrapper>

      {error ? (
        <ErrorText id={messageId}>{error}</ErrorText>
      ) : success ? (
        <SuccessText id={messageId}>{success}</SuccessText>
      ) : helperText ? (
        <HelperText id={messageId}>{helperText}</HelperText>
      ) : null}
    </Container>
  );
}
