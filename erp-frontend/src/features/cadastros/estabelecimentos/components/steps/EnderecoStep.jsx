import { Input } from "../../../../../components/ui/Input";

export default function EnderecoStep({ formData, onChange }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <Input
        label="CEP"
        value={formData.cep}
        onChange={(e) => onChange("cep", e.target.value)}
      />

      <Input
        label="Cidade *"
        value={formData.cidade}
        onChange={(e) => onChange("cidade", e.target.value)}
      />

      <Input
        label="Estado *"
        value={formData.estado}
        onChange={(e) => onChange("estado", e.target.value)}
      />

      <Input
        label="Logradouro"
        value={formData.endereco}
        onChange={(e) => onChange("endereco", e.target.value)}
      />

      <Input
        label="Número"
        value={formData.numero}
        onChange={(e) => onChange("numero", e.target.value)}
      />

      <Input
        label="Bairro"
        value={formData.bairro}
        onChange={(e) => onChange("bairro", e.target.value)}
      />
    </div>
  );
}
