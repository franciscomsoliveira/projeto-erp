import { useState } from "react";
import IdentificacaoStep from "./steps/IdentificacaoStep";
import EnderecoStep from "./steps/EnderecoStep";
import ContatoStep from "./steps/ContatoStep";

export function EstabelecimentoForm({
  formData,
  onChange,
  onSubmit,
  isEditing,
}) {
  const [step, setStep] = useState(0);

  const steps = ["Identificação", "Endereço", "Contato"];

  const [isSaving, setIsSaving] = useState(false);

  function validateStep() {
    if (step === 0) {
      return (
        formData.nome_fantasia?.trim() !== "" &&
        formData.cnpj?.trim() !== "" &&
        formData.tipo
      );
    }

    if (step === 1) {
      return formData.cidade?.trim() !== "" && formData.estado?.trim() !== "";
    }

    return true;
  }

  function next() {
    if (!validateStep()) {
      alert("Preencha os campos obrigatórios antes de continuar.");
      return;
    }
    setStep((prev) => prev + 1);
  }

  function back() {
    setStep((prev) => prev - 1);
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        if (step < steps.length - 1) {
          next();
          return;
        }

        try {
          setIsSaving(true);
          await onSubmit(e);
        } finally {
          setIsSaving(false);
        }
      }}
      className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-xl p-8 shadow-2xl space-y-8 "
    >
      {/* HEADER */}
      <h2 className="text-lg font-semibold text-slate-100">
        {isEditing ? "Editar Estabelecimento" : "Novo Estabelecimento"}
      </h2>

      {/* STEPPER */}
      <div className="space-y-6">
        {/* Barra de progresso */}
        <div className="relative h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-indigo-500 transition-all duration-500"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* Indicadores */}
        <div className="flex justify-between">
          {steps.map((label, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300
          ${
            step === index
              ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-110"
              : step > index
                ? "bg-indigo-500/20 text-indigo-400"
                : "bg-slate-800 text-slate-500"
          }`}
              >
                {index + 1}
              </div>

              <span
                className={`mt-2 text-xs tracking-wide transition
          ${step === index ? "text-indigo-400" : "text-slate-500"}`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* STEP CONTENT */}
      <div className="animate-in fade-in duration-300">
        {step === 0 && (
          <IdentificacaoStep formData={formData} onChange={onChange} />
        )}

        {step === 1 && <EnderecoStep formData={formData} onChange={onChange} />}

        {step === 2 && <ContatoStep formData={formData} onChange={onChange} />}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between pt-4">
        {step > 0 && (
          <button
            type="button"
            onClick={back}
            className="px-4 py-2 bg-slate-700 rounded-md text-sm"
          >
            Voltar
          </button>
        )}

        <button
          type="submit"
          disabled={isSaving}
          className="ml-auto px-6 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-md text-sm font-semibold transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSaving && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}

          {step < steps.length - 1
            ? "Próximo"
            : isEditing
              ? "Atualizar"
              : "Salvar"}
        </button>
      </div>
    </form>
  );
}
