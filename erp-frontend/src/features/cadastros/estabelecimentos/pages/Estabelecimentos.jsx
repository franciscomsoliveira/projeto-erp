import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Plus, X, Search } from "lucide-react";
import EstabelecimentosTable from "../components/EstabelecimentosTable";
import { EstabelecimentoForm } from "../components/EstabelecimentoForm";

const initialState = {
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
};

export default function Estabelecimentos() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  /* ================= API ================= */

  async function carregarDados() {
    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:3333/api/estabelecimentos/admin/lista",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      const data = await res.json();
      setEstabelecimentos(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Erro ao carregar lista:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  /* ================= STATUS ================= */

  async function handleToggleStatus(id, statusAtual) {
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
    } catch {
      alert("Erro ao atualizar status.");
    }
  }

  /* ================= SUBMIT ================= */

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const url = isEditing
        ? `http://localhost:3333/api/estabelecimentos/${selectedId}`
        : "http://localhost:3333/api/estabelecimentos";

      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        resetForm();
        carregarDados();
      } else {
        const error = await res.json();
        alert(error.error || "Erro ao salvar.");
      }
    } catch {
      alert("Erro de conexão.");
    }
  }

  /* ================= FORM CONTROL ================= */

  function resetForm() {
    setFormData(initialState);
    setIsEditing(false);
    setSelectedId(null);
    setIsFormOpen(false);
  }

  function handleNew() {
    setFormData(initialState);
    setIsEditing(false);
    setSelectedId(null);
    setIsFormOpen(true);
  }

  function handleEdit(item) {
    setFormData(item);
    setSelectedId(item.id);
    setIsEditing(true);
    setIsFormOpen(true);
  }

  /* ================= FILTRO ================= */

  const dadosFiltrados = estabelecimentos.filter((e) => {
    const termo = filtro.toLowerCase();
    return (
      e?.nome_fantasia?.toLowerCase().includes(termo) ||
      e?.cnpj?.includes(termo)
    );
  });

  const columns = [
    { key: "nome_fantasia", label: "Estabelecimento" },
    { key: "cnpj", label: "CNPJ" },
    { key: "cidade", label: "Cidade" },
    { key: "ativo", label: "Status", type: "status" },
  ];

  /* ================= RENDER ================= */

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <button
            onClick={() => navigate("/admin")}
            className="text-gray-400 hover:text-white mb-4 flex items-center gap-2 transition-colors"
          >
            ← Voltar
          </button>

          <h1 className="text-3xl font-semibold text-slate-100 flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Building2 className="text-indigo-400" size={26} />
            </div>
            Unidades
          </h1>

          <p className="text-slate-500 text-sm mt-1">
            Gerencie múltiplos estabelecimentos.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* BUSCA */}
          <div className="relative flex-1 md:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              size={16}
            />
            <input
              type="text"
              placeholder="Buscar unidade..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 pl-9 pr-4 py-2 rounded-md text-sm text-slate-200
              focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* BOTÃO NOVO */}
          <button
            onClick={() => (isFormOpen ? resetForm() : handleNew())}
            className={`flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold transition active:scale-95
            ${
              isFormOpen
                ? "bg-slate-800 text-slate-400 hover:bg-slate-700"
                : "bg-indigo-500 text-white hover:bg-indigo-400"
            }`}
          >
            {isFormOpen ? <X size={16} /> : <Plus size={16} />}
            {isFormOpen ? "Fechar" : "Nova Unidade"}
          </button>
        </div>
      </div>

      {/* FORM */}
      {isFormOpen && (
        <EstabelecimentoForm
          formData={formData}
          onChange={(name, value) =>
            setFormData((prev) => ({ ...prev, [name]: value }))
          }
          onSubmit={handleSubmit}
          isEditing={isEditing}
        />
      )}

      {/* TABELA */}
      <EstabelecimentosTable
        data={dadosFiltrados}
        loading={loading}
        onEdit={handleEdit}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}
