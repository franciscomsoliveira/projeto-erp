import { PageHeader } from "../../components/layout/PageHeader";
import { Button } from "../../components/ui";
import { useAuth } from "../../context/AuthContext";
import {
  DashboardGrid,
  KpiCard,
  KpiIcon,
  KpiContent,
  ChartCard,
  ListCard,
  ListItem,
  StatusBadge,
} from "./styles";

import {
  FiDollarSign,
  FiUsers,
  FiShoppingCart,
  FiAlertTriangle,
} from "react-icons/fi";

export function Home() {
  const { user } = useAuth();
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Visão geral operacional do sistema"
        breadcrumb={["Início", "Dashboard"]}
        meta={
          <>
            <span>Loja ativa: </span>
            {user?.loja_nome ? (
              <strong>{user.loja_nome}</strong>
            ) : (
              <em>Nenhuma loja selecionada</em>
            )}
          </>
        }
      />

      <DashboardGrid>
        <KpiCard>
          <KpiIcon>
            <FiDollarSign />
          </KpiIcon>

          <KpiContent>
            <span>Faturamento</span>
            <strong>R$ 28.450,90</strong>
            <small>+12,4% vs mês passado</small>
          </KpiContent>
        </KpiCard>

        <KpiCard>
          <KpiIcon>
            <FiUsers />
          </KpiIcon>

          <KpiContent>
            <span>Clientes</span>
            <strong>146</strong>
            <small>Ticket médio R$ 194,87</small>
          </KpiContent>
        </KpiCard>

        <KpiCard>
          <KpiIcon>
            <FiShoppingCart />
          </KpiIcon>

          <KpiContent>
            <span>Vendas</span>
            <strong>312</strong>
            <small>Produtos vendidos hoje</small>
          </KpiContent>
        </KpiCard>

        <KpiCard>
          <KpiIcon $danger>
            <FiAlertTriangle />
          </KpiIcon>

          <KpiContent>
            <span>Alertas</span>
            <strong>8</strong>
            <small>Produtos críticos no estoque</small>
          </KpiContent>
        </KpiCard>

        <ChartCard>
          <h3>Resumo de vendas</h3>

          <div className="fake-chart">
            <span style={{ height: "45%" }} />
            <span style={{ height: "70%" }} />
            <span style={{ height: "52%" }} />
            <span style={{ height: "84%" }} />
            <span style={{ height: "62%" }} />
            <span style={{ height: "91%" }} />
            <span style={{ height: "76%" }} />
          </div>
        </ChartCard>

        <ListCard>
          <h3>Produtos críticos</h3>

          <ListItem>
            <div>
              <strong>Gin Tanqueray</strong>
              <span>Estoque abaixo do mínimo</span>
            </div>
            <StatusBadge $danger>Crítico</StatusBadge>
          </ListItem>

          <ListItem>
            <div>
              <strong>Limão Siciliano</strong>
              <span>Reposição recomendada</span>
            </div>
            <StatusBadge $warning>Atenção</StatusBadge>
          </ListItem>

          <ListItem>
            <div>
              <strong>Água Tônica</strong>
              <span>Alta saída nas últimas vendas</span>
            </div>
            <StatusBadge>Normal</StatusBadge>
          </ListItem>
        </ListCard>
      </DashboardGrid>
    </>
  );
}
