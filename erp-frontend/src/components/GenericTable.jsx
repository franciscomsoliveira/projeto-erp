import { Edit2, Loader2, MoreHorizontal } from "lucide-react";

export default function GenericTable({ columns, data, loading, actions }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 bg-[#111625]/50 border border-white/5 rounded-xs">
        <Loader2 className="text-indigo-500 animate-spin mb-4" size={32} />
        <p className="text-gray-500 font-medium tracking-wide">
          Sincronizando dados...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-xs border border-white/5 bg-[#111625]/40 backdrop-blur-xl shadow-2xl">
      <table className="w-full text-left border-separate border-spacing-0">
        {/* CABEÇALHO */}
        <thead className="bg-white/2">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.15em] text-gray-500 border-b border-white/5"
              >
                {col.label}
              </th>
            ))}
            <th className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.15em] text-gray-500 border-b border-white/5 text-right">
              Ações
            </th>
          </tr>
        </thead>

        {/* CORPO */}
        <tbody className="divide-y divide-white/3">
          {data.length > 0 ? (
            data.map((item) => (
              <tr
                key={item.id}
                className="group hover:bg-indigo-500/3 transition-colors duration-200"
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
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                          {item[col.key] || "---"}
                        </span>
                      </div>
                    )}
                  </td>
                ))}

                {/* BOTÕES DE AÇÃO */}
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => actions.onEdit(item)}
                    className="inline-flex items-center justify-center p-2 rounded-xs bg-white/5 text-gray-400 hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all duration-200 shadow-lg"
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
                className="px-6 py-20 text-center"
              >
                <p className="text-gray-600 text-sm italic">
                  Nenhum registro encontrado no banco de dados.
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
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold border transition-all duration-300 ${
        ativo === 1
          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          : "bg-rose-500/10 text-rose-400 border-rose-500/20 hover:bg-rose-500/20"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${ativo === 1 ? "bg-emerald-400 animate-pulse" : "bg-rose-500"}`}
      />
      {ativo === 1 ? "ATIVO" : "INATIVO"}
    </button>
  );
}
