import { Input } from "../../../../../components/ui/Input";
import { CnpjInput } from "../CnpjInput";

export default function IdentificacaoStep({ formData, onChange }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <Input
        label="Nome Fantasia *"
        value={formData.nome_fantasia}
        onChange={(e) => onChange("nome_fantasia", e.target.value)}
      />

      <Input
        label="Razão Social"
        value={formData.razao_social}
        onChange={(e) => onChange("razao_social", e.target.value)}
      />

      <CnpjInput
        value={formData.cnpj}
        onChange={(value) => onChange("cnpj", value)}
      />

      <div className="flex flex-col gap-1">
        <label className="text-sm text-slate-400">Categoria *</label>

        <select
          value={formData.tipo}
          onChange={(e) => onChange("tipo", e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm
          focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
        >
          <option value="RESTAURANTE">Restaurante</option>
          <option value="BAR">Bar</option>
          <option value="BAR_RESTAURANTE">Bar & Restaurante</option>
          <option value="OUTRO">Outro</option>
        </select>
      </div>
    </div>
  );
}
