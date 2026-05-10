import { Container, Label, SelectWrapper, StyledSelect, ErrorText, HelperText } from "./styles";
export function Select({ label, error, helperText, options = [], placeholder = "Selecione", fullWidth = true, size = "md", disabled = false, children, ...props }) {
  return <Container $fullWidth={fullWidth}>{label && <Label>{label}</Label>}<SelectWrapper $size={size} $hasError={!!error} $disabled={disabled}><StyledSelect disabled={disabled} {...props}>{placeholder && <option value="">{placeholder}</option>}{children || options.map((option)=><option key={option.value ?? option} value={option.value ?? option}>{option.label ?? option}</option>)}</StyledSelect></SelectWrapper>{error ? <ErrorText>{error}</ErrorText> : helperText ? <HelperText>{helperText}</HelperText> : null}</Container>;
}
