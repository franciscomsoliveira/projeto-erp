import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth(); // Pega o usuário e a função de logout do contexto
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Limpa o localStorage e o estado do usuário
    navigate("/login"); // Redireciona para a tela de login
  };

  return (
    <div style={{ padding: "20px" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Dashboard</h1>

        <div style={{ textAlign: "right" }}>
          <span>
            Bem-vindo, <strong>{user?.nome}</strong>
          </span>
          <button
            onClick={handleLogout}
            style={{
              marginLeft: "15px",
              padding: "5px 10px",
              backgroundColor: "#ff4d4d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sair
          </button>
        </div>
      </header>

      <hr />

      <main>
        <p>
          Você está conectado ao estabelecimento:{" "}
          <strong>{user?.estabelecimento?.nome}</strong>
        </p>
        {/* Restante do seu conteúdo aqui */}
      </main>
    </div>
  );
}
