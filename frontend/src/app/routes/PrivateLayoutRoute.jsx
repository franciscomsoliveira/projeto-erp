import { AppLayout } from "@/app/layouts";
import { ProtectedRoute } from "./ProtectedRoute";

export function PrivateLayoutRoute({ route }) {
  return (
    <AppLayout>
      <ProtectedRoute route={route} />
    </AppLayout>
  );
}
