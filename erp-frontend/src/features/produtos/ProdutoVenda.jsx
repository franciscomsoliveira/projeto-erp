import { useNavigate } from "react-router-dom"; // Não esqueça do import!

export default function ProdutoVenda() {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  return (
    // O return é obrigatório aqui!
    <>
      <button
        onClick={() => navigate("/produtos")}
        className="text-gray-400 hover:text-white mb-4 flex items-center gap-2 transition-colors"
      >
        ← Voltar para Produtos
      </button>

      <h1 className="text-2xl font-bold text-white">Oi, Produto Venda!</h1>
    </>
  );
}
