import { FiSave, FiX } from "react-icons/fi";
import { Button } from "../../ui";
import { Actions } from "./styles";

export function FormActions({
  children,
  align = "end",
  sticky = false,
  onCancel,
  onSubmit,
  cancelLabel = "Cancelar",
  submitLabel = "Salvar",
  loading = false,
  disabled = false,
}) {
  if (children) {
    return (
      <Actions $align={align} $sticky={sticky}>
        {children}
      </Actions>
    );
  }

  return (
    <Actions $align={align} $sticky={sticky}>
      {onCancel && (
        <Button variant="secondary" leftIcon={<FiX />} onClick={onCancel} disabled={loading}>
          {cancelLabel}
        </Button>
      )}

      <Button
        type={onSubmit ? "button" : "submit"}
        variant="primary"
        leftIcon={<FiSave />}
        onClick={onSubmit}
        loading={loading}
        disabled={disabled}
      >
        {submitLabel}
      </Button>
    </Actions>
  );
}
