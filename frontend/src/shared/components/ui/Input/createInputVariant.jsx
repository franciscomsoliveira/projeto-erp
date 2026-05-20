import { Input } from "./Input";

export function createInputVariant(config) {
  return function InputVariant({
    type = config.type || "text",
    label = config.label,
    placeholder = config.placeholder,
    inputMode = config.inputMode,
    autoComplete = config.autoComplete,
    maxLength = config.maxLength,
    leftIcon,
    onChange,
    ...props
  }) {
    const Icon = config.leftIcon;

    function handleChange(event) {
      if (config.transform === "uppercase") {
        event.target.value = event.target.value.toUpperCase();
      }

      onChange?.(event);
    }

    return (
      <Input
        type={type}
        label={label}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        maxLength={maxLength}
        leftIcon={leftIcon ?? (Icon ? <Icon /> : null)}
        onChange={handleChange}
        {...props}
      />
    );
  };
}
