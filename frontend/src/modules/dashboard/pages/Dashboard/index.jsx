import { PageHeader } from "@/app/layouts";
import { Card } from "@/shared/components/ui";

export function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Visão geral do sistema"
        breadcrumb={["Início", "Dashboard"]}
      />

      <Card title="Resumo">Bem-vindo ao ERP.</Card>
    </>
  );
}
