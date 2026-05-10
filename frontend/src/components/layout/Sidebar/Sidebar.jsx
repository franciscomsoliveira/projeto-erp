import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import * as Fi from "react-icons/fi";

import { useAuth } from "../../../context/AuthContext";

import {
  Overlay,
  SidebarContainer,
  Nav,
  NavGroup,
  NavButton,
  SubMenu,
  SubMenuItem,
} from "./styles";

export function Sidebar({ mobileOpen, onCloseMobile }) {
  const { user } = useAuth();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const isNivel100 = Number(user?.nivel) === 100;

  const menuItems = [
    {
      label: "DASHBOARD",
      path: "/home",
      icon: <Fi.FiHome />,
    },

    {
      label: "CADASTROS",
      icon: <Fi.FiDatabase />,
      children: [
        { label: "Usuários", path: "/usuarios", icon: <Fi.FiUsers /> },

        ...(isNivel100
          ? [
              { label: "Lojas", path: "/lojas", icon: <Fi.FiHome /> },
              { label: "Perfis", path: "/perfis", icon: <Fi.FiShield /> },
            ]
          : []),

        { label: "Fornecedores", path: "/fornecedores", icon: <Fi.FiTruck /> },
        { label: "Clientes", path: "/clientes", icon: <Fi.FiUserCheck /> },
      ],
    },

    {
      label: "ESTOQUE",
      icon: <Fi.FiArchive />,
      children: [
        { label: "Mapa de Estoque", path: "/estoque", icon: <Fi.FiMap /> },
        { label: "Entradas", path: "/estoque/entradas", icon: <Fi.FiLogIn /> },
        { label: "Saídas", path: "/estoque/saidas", icon: <Fi.FiLogOut /> },
        {
          label: "Transferências",
          path: "/estoque/transferencias",
          icon: <Fi.FiRepeat />,
        },
        {
          label: "Perdas",
          path: "/estoque/perdas",
          icon: <Fi.FiAlertTriangle />,
        },
        {
          label: "Inventário",
          path: "/estoque/inventario",
          icon: <Fi.FiClipboard />,
        },
      ],
    },

    {
      label: "PRODUÇÃO",
      icon: <Fi.FiPackage />,
      children: [
        { label: "Insumos", path: "/insumos", icon: <Fi.FiArchive /> },
        {
          label: "Pré-produção",
          path: "/pre-producao",
          icon: <Fi.FiPackage />,
        },
        {
          label: "Fichas Técnicas",
          path: "/fichas-tecnicas",
          icon: <Fi.FiClipboard />,
        },
        {
          label: "Baixa por Produção",
          path: "/producao/baixa",
          icon: <Fi.FiMinusCircle />,
        },
        {
          label: "Estorno de Produção",
          path: "/producao/estorno",
          icon: <Fi.FiRotateCcw />,
        },
      ],
    },

    {
      label: "VENDAS",
      icon: <Fi.FiShoppingCart />,
      children: [
        {
          label: "Importar Vendas",
          path: "/vendas/importar",
          icon: <Fi.FiUploadCloud />,
        },
        {
          label: "Pré-análise",
          path: "/vendas/pre-analise",
          icon: <Fi.FiSearch />,
        },
        {
          label: "Vendas Realizadas",
          path: "/vendas",
          icon: <Fi.FiShoppingBag />,
        },
        {
          label: "Produtos Vendidos",
          path: "/vendas/produtos",
          icon: <Fi.FiTrendingUp />,
        },
      ],
    },

    {
      label: "FINANCEIRO",
      icon: <Fi.FiDollarSign />,
      children: [
        { label: "DRE", path: "/financeiro/dre", icon: <Fi.FiBarChart2 /> },
        { label: "CMV", path: "/financeiro/cmv", icon: <Fi.FiPercent /> },
        {
          label: "Contas a Pagar",
          path: "/financeiro/pagar",
          icon: <Fi.FiArrowDownCircle />,
        },
        {
          label: "Contas a Receber",
          path: "/financeiro/receber",
          icon: <Fi.FiArrowUpCircle />,
        },
        {
          label: "Fluxo de Caixa",
          path: "/financeiro/caixa",
          icon: <Fi.FiActivity />,
        },
      ],
    },

    {
      label: "RELATÓRIOS",
      icon: <Fi.FiBarChart2 />,
      children: [
        {
          label: "Dashboard Gerencial",
          path: "/relatorios/gerencial",
          icon: <Fi.FiPieChart />,
        },
        {
          label: "Curva ABC",
          path: "/relatorios/curva-abc",
          icon: <Fi.FiTrendingUp />,
        },
        {
          label: "Produtos Críticos",
          path: "/relatorios/produtos-criticos",
          icon: <Fi.FiAlertCircle />,
        },
        {
          label: "Auditoria de Bebidas",
          path: "/relatorios/auditoria-bebidas",
          icon: <Fi.FiEye />,
        },
        {
          label: "Ranking de Vendas",
          path: "/relatorios/ranking-vendas",
          icon: <Fi.FiAward />,
        },
      ],
    },

    {
      label: "CONFIGURAÇÕES",
      icon: <Fi.FiSettings />,
      children: [
        { label: "Minha Conta", path: "/minha-conta", icon: <Fi.FiUser /> },
        { label: "Permissões", path: "/permissoes", icon: <Fi.FiLock /> },
        { label: "Parâmetros", path: "/parametros", icon: <Fi.FiSliders /> },
        { label: "Integrações", path: "/integracoes", icon: <Fi.FiLink /> },
      ],
    },
  ];

  useEffect(() => {
    if (!mobileOpen) setOpenMenu(null);
  }, [mobileOpen]);

  const desktopExpanded = isHovered;
  const mobileExpanded = mobileOpen;

  function toggleMenu(label) {
    setOpenMenu((prev) => (prev === label ? null : label));
  }

  function isGroupActive(item) {
    return item.children?.some((child) =>
      location.pathname.startsWith(child.path),
    );
  }

  return (
    <>
      <Overlay $isOpen={mobileOpen} onClick={onCloseMobile} />

      <SidebarContainer
        $isOpen={mobileOpen}
        $isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setOpenMenu(null);
        }}
      >
        <Nav>
          {menuItems.map((item) => {
            const hasChildren = !!item.children?.length;
            const isOpen = openMenu === item.label;
            const groupActive = hasChildren ? isGroupActive(item) : false;

            if (!hasChildren) {
              return (
                <NavGroup
                  key={item.label}
                  $desktopExpanded={desktopExpanded}
                  $mobileExpanded={mobileExpanded}
                >
                  <NavLink to={item.path} onClick={onCloseMobile}>
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.label}</span>
                  </NavLink>
                </NavGroup>
              );
            }

            return (
              <NavGroup
                key={item.label}
                $desktopExpanded={desktopExpanded}
                $mobileExpanded={mobileExpanded}
              >
                <NavButton
                  type="button"
                  onClick={() => toggleMenu(item.label)}
                  $isOpen={isOpen}
                  $active={groupActive}
                  $desktopExpanded={desktopExpanded}
                  $mobileExpanded={mobileExpanded}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.label}</span>
                  <Fi.FiChevronDown className="chevron" />
                </NavButton>

                <SubMenu
                  $isOpen={isOpen && (desktopExpanded || mobileExpanded)}
                >
                  {item.children.map((child) => (
                    <SubMenuItem key={child.path}>
                      <NavLink
                        to={child.path}
                        onClick={onCloseMobile}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        <span className="icon">{child.icon}</span>
                        <span className="label">{child.label}</span>
                      </NavLink>
                    </SubMenuItem>
                  ))}
                </SubMenu>
              </NavGroup>
            );
          })}
        </Nav>
      </SidebarContainer>
    </>
  );
}
