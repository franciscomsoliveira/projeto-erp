import React, { useState } from "react";
import { Save, AlertCircle } from "lucide-react";

export default function GenericForm({
  sections,
  formData,
  onChange,
  onSubmit,
  title,
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#111625]/60 backdrop-blur-md border border-white/5 rounded-xs shadow-2xl overflow-hidden animate-fade-in">
      {/* HEADER DO FORM */}
      <div className="px-8 py-6 border-b border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white/1">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-gray-500 text-xs mt-1 font-medium uppercase tracking-wider">
            Módulo de Cadastro
          </p>
        </div>

        {/* NAVEGAÇÃO DE ABAS */}
        <div className="flex gap-8 p-6 bg-black/40 rounded-xs border border-white/5">
          {sections.map((sec, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-10 py-2 rounded-xs gap-4 text-xs font-bold transition-all duration-300 ${
                activeTab === idx
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              }`}
            >
              {sec.title}
            </button>
          ))}
        </div>
      </div>

      {/* CORPO DO FORM */}
      <form onSubmit={onSubmit} className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections[activeTab].fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-2 group">
              {/* LABEL */}
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] group-focus-within:text-indigo-400 transition-colors">
                {field.label}
              </label>

              {/* INPUTS / SELECTS */}
              {field.type === "select" ? (
                <select
                  className="w-full bg-[#0B0F1A] border border-white/10 p-3.5 rounded-xs text-sm text-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all cursor-pointer appearance-none shadow-inner"
                  value={formData[field.name] || ""}
                  onChange={(e) => onChange(field.name, e.target.value)}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || "text"}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full bg-[#0B0F1A] border border-white/10 p-3.5 rounded-xs text-sm text-white placeholder:text-gray-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-inner"
                  value={formData[field.name] || ""}
                  onChange={(e) => onChange(field.name, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>

        {/* RODAPÉ */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-600">
            <AlertCircle size={14} />
            <span className="text-[10px] font-medium uppercase tracking-widest">
              Os campos marcados são obrigatórios
            </span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xs font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-600/20 transition-all active:scale-95 group"
          >
            <Save
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
            Salvar Registro
          </button>
        </div>
      </form>
    </div>
  );
}
