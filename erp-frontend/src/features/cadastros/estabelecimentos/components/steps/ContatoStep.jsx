import { Input } from "../../../../../components/ui/Input";

export default function ContatoStep({ formData, onChange }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <Input
        label="Telefone"
        value={formData.telefone}
        onChange={(e) => onChange("telefone", e.target.value)}
      />

      <Input
        label="E-mail"
        type="email"
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
    </div>
  );
}
