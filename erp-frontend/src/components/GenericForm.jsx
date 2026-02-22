import React, { useState } from "react";
import { Save, AlertCircle } from "lucide-react";

export default function GenericForm({
  sections,
  formData,
  onChange,
  onSubmit,
  title,
  submitLabel,
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-7xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
      {/* HEADER */}
      <div className="px-8 py-6 border-b border-slate-800 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-100 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
            Módulo de Cadastro
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 p-2 bg-slate-800/60 rounded-lg border border-slate-700">
          {sections.map((sec, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2 rounded-md text-xs font-semibold transition-all duration-200
              ${
                activeTab === idx
                  ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-700"
              }`}
            >
              {sec.title}
            </button>
          ))}
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={onSubmit} className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections[activeTab].fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              {/* LABEL */}
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                {field.label}
                {field.required && <span className="text-red-400 ml-1">*</span>}
              </label>

              {/* INPUT / SELECT */}
              {field.type === "select" ? (
                <select
                  value={formData[field.name] || ""}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  className="bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-md w-full px-3 py-2.5
                  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500
                  transition"
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
                  value={formData[field.name] || ""}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  className="bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-md w-full px-3 py-2.5
                  placeholder:text-slate-500
                  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500
                  transition"
                />
              )}
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-500">
            <AlertCircle size={14} />
            <span className="text-[10px] uppercase tracking-wider">
              Campos com * são obrigatórios
            </span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3
            bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg
            font-semibold text-xs uppercase tracking-wider
            shadow-lg shadow-indigo-500/20
            transition duration-200 active:scale-95 group"
          >
            <Save
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
            <label>{submitLabel}</label>
          </button>
        </div>
      </form>
    </div>
  );
}
