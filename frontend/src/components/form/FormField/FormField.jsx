import { FormError } from "../FormError";
import { FormHelperText } from "../FormHelperText";
import { FormLabel } from "../FormLabel";
import { Field } from "./styles";

export function FormField({
  children,
  label,
  htmlFor,
  required = false,
  error,
  helperText,
  fullWidth = true,
}) {
  return (
    <Field $fullWidth={fullWidth}>
      <FormLabel htmlFor={htmlFor} required={required}>
        {label}
      </FormLabel>

      {children}

      {error ? <FormError>{error}</FormError> : <FormHelperText>{helperText}</FormHelperText>}
    </Field>
  );
}
