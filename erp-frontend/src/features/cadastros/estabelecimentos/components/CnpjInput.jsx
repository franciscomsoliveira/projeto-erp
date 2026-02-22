import { Input } from "../../../../components/ui/Input";

function formatCnpj(value) {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);
}

export function CnpjInput({ value, onChange, ...props }) {
  const handleChange = (e) => {
    const formatted = formatCnpj(e.target.value);
    onChange(formatted);
  };

  return (
    <Input label="CNPJ" value={value} onChange={handleChange} {...props} />
  );
}
