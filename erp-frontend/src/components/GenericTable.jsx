import { Edit2, Loader2 } from "lucide-react";

export default function GenericTable({ columns, data, loading, actions }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 bg-slate-900 border border-slate-800 rounded-xl">
        <Loader2 className="text-indigo-500 animate-spin mb-4" size={32} />
        <p className="text-slate-400 font-medium tracking-wide">
          Sincronizando dados...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-xl">
      <table className="w-full text-left border-collapse">
        {/* HEADER */}
        <thead className="bg-slate-800/60">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-500 border-b border-slate-800"
              >
                {col.label}
              </th>
            ))}
            <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-500 border-b border-slate-800 text-right">
              Ações
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="divide-y divide-slate-800">
          {data.length > 0 ? (
            data.map((item) => (
              <tr
                key={item.id}
                className="group hover:bg-slate-800/50 transition-colors duration-200"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4">
                    {col.type === "status" ? (
                      <StatusBadge
                        ativo={item[col.key]}
                        onClick={() =>
                          actions.onToggleStatus(item.id, item[col.key])
                        }
                      />
                    ) : (
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        {col.render ? (
                          col.render(item)
                        ) : col.type === "status" ? (
                          <StatusBadge
                            ativo={item[col.key]}
                            onClick={() =>
                              actions?.onToggleStatus?.(item.id, item[col.key])
                            }
                          />
                        ) : (
                          <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                            {item[col.key] || "---"}
                          </span>
                        )}
                      </span>
                    )}
                  </td>
                ))}

                {/* ACTIONS */}
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => actions.onEdit(item)}
                    className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-500 hover:text-white transition duration-200 active:scale-95"
                  >
                    <Edit2 size={16} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-6 py-16 text-center"
              >
                <p className="text-slate-500 text-sm italic">
                  Nenhum registro encontrado.
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
function StatusBadge({ ativo, onClick }) {
  const isActive = ativo === 1;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold border transition
        ${
          isActive
            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
            : "bg-rose-500/10 text-rose-400 border-rose-500/20 hover:bg-rose-500/20"
        }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isActive ? "bg-emerald-400 animate-pulse" : "bg-rose-400"
        }`}
      />
      {isActive ? "Ativo" : "Inativo"}
    </button>
  );
}
