import { useState, useEffect } from "react";
import { Building2, Plus, X, Search } from "lucide-react";
import GenericTable from "../../components/GenericTable";
import GenericForm from "../../components/GenericForm";

export default function Estabelecimentos() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");

  const [formData, setFormData] = useState({
    nome_fantasia: "",
    razao_social: "",
    cnpj: "",
    tipo: "RESTAURANTE",
    estado: "",
    cidade: "",
    endereco: "",
    numero: "",
    bairro: "",
    cep: "",
    telefone: "",
    email: "",
  });

  // --- 1. CONFIGURAÇÃO DAS ABAS DO FORMULÁRIO (PASSO 3) ---
  const sections = [
    {
      title: "Identificação",
      fields: [
        {
          name: "nome_fantasia",
          label: "Nome Fantasia",
          placeholder: "Ex: Padaria Central",
          required: true,
        },
        {
          name: "razao_social",
          label: "Razão Social",
          placeholder: "Nome Jurídico",
        },
        { name: "cnpj", label: "CNPJ", placeholder: "00.000.000/0000-00" },
        {
          name: "tipo",
          label: "Categoria",
          type: "select",
          options: [
            { label: "Restaurante", value: "RESTAURANTE" },
            { label: "Bar", value: "BAR" },
            { label: "Bar & Restaurante", value: "BAR_RESTAURANTE" },
            { label: "Outro", value: "OUTRO" },
          ],
        },
      ],
    },
    {
      title: "Endereço",
      fields: [
        { name: "cep", label: "CEP", placeholder: "00000-000" },
        { name: "cidade", label: "Cidade" },
        { name: "estado", label: "UF" },
        { name: "endereco", label: "Logradouro" },
        { name: "numero", label: "Nº" },
        { name: "bairro", label: "Bairro" },
      ],
    },
    {
      title: "Contato",
      fields: [
        { name: "telefone", label: "Telefone Principal" },
        { name: "email", label: "E-mail Principal", type: "email" },
      ],
    },
  ];

  // --- 2. CONFIGURAÇÃO DAS COLUNAS DA TABELA ---
  const columns = [
    { key: "nome_fantasia", label: "Estabelecimento" },
    { key: "cnpj", label: "CNPJ" },
    { key: "cidade", label: "Local" },
    { key: "ativo", label: "Status", type: "status" },
  ];

  // --- 3. LÓGICA DE COMUNICAÇÃO COM API ---
  const carregarDados = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "http://localhost:3333/api/estabelecimentos/admin/lista",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );
      const data = await res.json();
      setEstabelecimentos(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Erro ao carregar lista:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const handleToggleStatus = async (id, statusAtual) => {
    const novoStatus = statusAtual === 1 ? 0 : 1;
    try {
      const res = await fetch(
        `http://localhost:3333/api/estabelecimentos/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ ativo: novoStatus }),
        },
      );
      if (res.ok) {
        setEstabelecimentos((prev) =>
          prev.map((e) => (e.id === id ? { ...e, ativo: novoStatus } : e)),
        );
      }
    } catch (err) {
      alert("Erro ao atualizar status");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3333/api/estabelecimentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsFormOpen(false);
        carregarDados();
        setFormData({
          nome_fantasia: "",
          razao_social: "",
          cnpj: "",
          tipo: "RESTAURANTE",
        });
        alert("Cadastrado com sucesso!");
      } else {
        const data = await res.json();
        alert(`Erro: ${data.error || "Falha ao salvar"}`);
      }
    } catch (err) {
      alert("Erro de conexão com o servidor.");
    }
  };

  // Filtro de busca simples na tabela
  const dadosFiltrados = estabelecimentos.filter((e) => {
    // Converte tudo para string e garante que não seja undefined/null com o "|| ''"
    const nomeFantasia = e?.nome_fantasia?.toLowerCase() || "";
    const cnpj = e?.cnpj || "";
    const termoBusca = filtro.toLowerCase();

    return nomeFantasia.includes(termoBusca) || cnpj.includes(termoBusca);
  });

  return (
    <div className="w-full max-w-350 mx-auto p-6 space-y-8 animate-in fade-in duration-700">
      {/* HEADER PRINCIPAL */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-8">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <div className="p-2 bg-indigo-600/20 rounded-xs">
              <Building2 className="text-indigo-500" size={28} />
            </div>
            Unidades
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Gerencie múltiplos estabelecimentos e permissões de acesso.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar unidade..."
              className="w-full bg-[#111625] border border-white/10 pl-10 pr-4 py-2.5 rounded-xs text-sm text-white focus:border-indigo-500 outline-none transition-all"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
          </div>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xs font-bold transition-all active:scale-95 shadow-lg ${
              isFormOpen
                ? "bg-white/5 text-gray-400 hover:bg-white/10"
                : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/20"
            }`}
          >
            {isFormOpen ? (
              <>
                <X size={20} /> Fechar
              </>
            ) : (
              <>
                <Plus size={20} /> Nova Unidade
              </>
            )}
          </button>
        </div>
      </div>

      {/* FORMULÁRIO COM ABAS (SÓ APARECE AO CLICAR EM NOVO) */}
      {isFormOpen && (
        <div className="animate-in slide-in-from-top-4 duration-500">
          <GenericForm
            title="Cadastro de Novo Estabelecimento"
            sections={sections}
            formData={formData}
            onChange={(name, value) =>
              setFormData((prev) => ({ ...prev, [name]: value }))
            }
            onSubmit={handleSubmit}
          />
        </div>
      )}

      {/* TABELA DE DADOS */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <GenericTable
          columns={columns}
          data={dadosFiltrados}
          loading={loading}
          actions={{
            onToggleStatus: handleToggleStatus,
            onEdit: (item) => {
              setFormData(item);
              setIsFormOpen(true);
            },
          }}
        />
      </div>
    </div>
  );
}
