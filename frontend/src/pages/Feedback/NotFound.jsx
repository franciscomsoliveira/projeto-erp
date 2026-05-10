import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ui";
import { AppLayout } from "../../components/layout";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ padding: 40 }}>
        <h1>404</h1>
        <p>Página não encontrada</p>

        <Button variant="secondary" onClick={() => navigate("/home")}>
          Voltar
        </Button>
      </div>
    </>
  );
}
