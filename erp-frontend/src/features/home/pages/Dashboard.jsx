export default function Dashboard() {
  const stats = [
    {
      name: "Vendas Totais",
      value: "R$ 45.285,00",
      icon: "💰",
      change: "+12.5%",
      color: "text-green-400",
    },
    {
      name: "Pedidos Pendentes",
      value: "12",
      icon: "📦",
      change: "-2",
      color: "text-yellow-400",
    },
    {
      name: "Novos Clientes",
      value: "48",
      icon: "👥",
      change: "+18%",
      color: "text-blue-400",
    },
    {
      name: "Ticket Médio",
      value: "R$ 240,00",
      icon: "📈",
      change: "+4.3%",
      color: "text-indigo-400",
    },
  ];

  return (
    <div className="w-full max-w-350 mx-auto p-6 space-y-8 animate-in fade-in duration-700">
      {" "}
      {/* Aumentado o espaço vertical entre as seções */}
      {/* Cabeçalho Refinado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Dashboard
          </h2>
          <p className="text-gray-400 mt-1">
            Visão geral do desempenho da sua matriz.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
            Filtrar Data
          </button>
        </div>
      </div>
      {/* Cards de KPIs com Gradiente Sutil */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative group bg-gray-900 border border-gray-800 p-6 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            {/* Brilho no hover */}
            <div className="bg-[linear-gradient(to_right,var(--color-indigo-600),var(--color-purple-700))]" />

            <div className="flex items-center justify-between relative">
              <div className="p-2 bg-gray-800 rounded-lg text-xl">
                {item.icon}
              </div>
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700 ${item.color}`}
              >
                {item.change}
              </span>
            </div>
            <div className="mt-5 relative">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {item.name}
              </h3>
              <p className="text-3xl font-bold text-white mt-1">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Grid Inferior: Tabela + Info */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Tabela de Vendas Mais Espaçada */}
        <div className="xl:col-span-2 bg-gray-900 border border-gray-800 rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-100">Últimas Vendas</h3>
            <button className="text-sm text-indigo-400 hover:underline">
              Exportar CSV
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-xs uppercase tracking-widest">
                  <th className="px-8 py-4 font-semibold">Cliente</th>
                  <th className="px-8 py-4 font-semibold">Status</th>
                  <th className="px-8 py-4 font-semibold text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[1, 2, 3, 4].map((i) => (
                  <tr
                    key={i}
                    className="group hover:bg-gray-800/40 transition-colors"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center">
                        <div className="h-9 w-9 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold mr-3 text-xs">
                          JS
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-200">
                            João Silva {i}
                          </div>
                          <div className="text-xs text-gray-500">
                            venda #{1000 + i}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        ● Concluído
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right font-mono font-bold text-gray-100">
                      R$ 350,00
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Card Lateral de Performance */}
        <div className="flex flex-col gap-6">
          <div className="bg-[linear-gradient(to_right,var(--color-indigo-600),var(--color-purple-700))]">
            <h3 className="text-lg font-bold opacity-90">Meta Mensal</h3>
            <p className="text-sm opacity-75 mt-1">
              Você atingiu 75% da sua meta.
            </p>
            <div className="mt-6 h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[75%] shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>
            <button className="mt-6 w-full py-2.5 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-opacity-90 transition">
              Ver Detalhes
            </button>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-gray-100 font-bold mb-4">Relatórios</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Vendas PDF</span>
                <button className="text-indigo-400">Baixar</button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Estoque Geral</span>
                <button className="text-indigo-400">Baixar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
