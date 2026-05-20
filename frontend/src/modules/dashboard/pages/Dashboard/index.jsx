import { PageHeader } from "@/shared/components/navigation";

import { useAuth } from "@/core/auth";

import { Card } from "@/shared/components/ui";

export function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle={`Bem-vindo, ${user?.nome || "Usuário"}`}
      />

      <Card title="Resumo">Bem-vindo ao ERP.</Card>
    </>
  );
}
