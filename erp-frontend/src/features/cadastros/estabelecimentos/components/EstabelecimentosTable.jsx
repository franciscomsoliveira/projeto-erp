import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function EstabelecimentosTable({
  data,
  loading,
  onEdit,
  onToggleStatus,
}) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("ALL");

  const itemsPerPage = 5;

  /* ================= FILTRO ================= */

  const filteredData = useMemo(() => {
    let result = [...data];

    if (statusFilter !== "ALL") {
      result = result.filter((item) => item.ativo === Number(statusFilter));
    }

    if (sortKey) {
      result.sort((a, b) => {
        const valueA = a[sortKey] ?? "";
        const valueB = b[sortKey] ?? "";

        if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
        if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, sortKey, sortDirection, statusFilter]);

  /* ================= PAGINAÇÃO ================= */

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  function handleSort(key) {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  }

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="p-16 text-center text-slate-400">
        Carregando estabelecimentos...
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden">
      {/* FILTRO */}
      <div className="flex justify-between items-center p-4 border-b border-slate-800">
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm text-slate-200"
        >
          <option value="ALL">Todos</option>
          <option value="1">Ativos</option>
          <option value="0">Inativos</option>
        </select>

        <span className="text-xs text-slate-500">
          Total: {filteredData.length}
        </span>
      </div>

      {/* TABELA */}
      <table className="w-full text-left">
        <thead className="bg-slate-800/60">
          <tr>
            {["nome_fantasia", "cnpj", "cidade"].map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                className="px-6 py-4 text-xs uppercase tracking-widest text-slate-400 cursor-pointer select-none"
              >
                <div className="flex items-center gap-2">
                  {key.replace("_", " ")}
                  {sortKey === key &&
                    (sortDirection === "asc" ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    ))}
                </div>
              </th>
            ))}
            <th className="px-6 py-4 text-xs uppercase text-slate-400">
              Status
            </th>
            <th className="px-6 py-4 text-xs uppercase text-slate-400 text-right">
              Ações
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-800">
          {paginatedData.map((item) => (
            <tr key={item.id} className="hover:bg-slate-800/50 transition">
              <td className="px-6 py-4 text-sm text-slate-300">
                {item.nome_fantasia}
              </td>
              <td className="px-6 py-4 text-sm text-slate-300">{item.cnpj}</td>
              <td className="px-6 py-4 text-sm text-slate-300">
                {item.cidade}
              </td>

              <td className="px-6 py-4">
                <StatusBadge
                  ativo={item.ativo}
                  onClick={() => onToggleStatus(item.id, item.ativo)}
                />
              </td>

              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onEdit(item)}
                  className="px-3 py-1 text-xs bg-indigo-500 hover:bg-indigo-400 text-white rounded-md transition"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINAÇÃO */}
      <div className="flex justify-between items-center p-4 border-t border-slate-800 text-sm text-slate-400">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="disabled:opacity-40"
        >
          ← Anterior
        </button>

        <span>
          Página {currentPage} de {totalPages || 1}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="disabled:opacity-40"
        >
          Próxima →
        </button>
      </div>
    </div>
  );
}

/* ===== Status ===== */

function StatusBadge({ ativo, onClick }) {
  const isActive = ativo === 1;

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-xs rounded-full font-semibold transition
        ${
          isActive
            ? "bg-emerald-500/10 text-emerald-400"
            : "bg-rose-500/10 text-rose-400"
        }`}
    >
      {isActive ? "Ativo" : "Inativo"}
    </button>
  );
}
