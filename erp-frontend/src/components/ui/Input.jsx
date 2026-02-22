export function Input({ label, error, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-slate-400">{label}</label>}

      <input
        className={`bg-slate-800/70
border border-slate-700
rounded-lg
px-4 py-2.5
text-sm
focus:ring-2 focus:ring-indigo-500
focus:border-indigo-500
transition
        ${error ? "border-red-500" : ""}
        ${className}`}
        {...props}
      />

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
