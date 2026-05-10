import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ui";
import { AppLayout } from "../../components/layout";

export function Placeholder({ title = "Em desenvolvimento" }) {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ padding: 40 }}>
        <h1>{title}</h1>
        <p>Esta página ainda será implementada.</p>

        <Button variant="secondary" onClick={() => navigate("/home")}>
          Voltar
        </Button>
      </div>
    </>
  );
}
