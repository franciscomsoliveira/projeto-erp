import { useNavigate } from "react-router-dom";

export default function AdminLista() {
  const navigate = useNavigate();

  const categorias = [
    {
      title: "Estabelecimentos",
      description: "Gestão de matérias-primas e materiais básicos.",
      icon: "🧪",
      path: "/admin/estabelecimentos",
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Fornecedores",
      description: "Itens intermediários e processamento inicial.",
      icon: "⚙️",
      path: "/admin/fornecedores",
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Usuários",
      description: "Catálogo de produtos finais prontos para o cliente.",
      icon: "🛍️",
      path: "/admin/usuarios",
      color: "from-emerald-600 to-emerald-400",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Módulo de Produtos</h1>
        <p className="text-gray-400">
          Selecione uma categoria para gerenciar seu inventário e produção.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categorias.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.path)}
            className="group cursor-pointer bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-indigo-500 transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.15)]"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-linear-to-br ${item.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
            <div className="mt-4 flex items-center text-indigo-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Acessar módulo <span className="ml-2">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
