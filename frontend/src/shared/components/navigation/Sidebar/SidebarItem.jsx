import { ItemLink } from "./styles";

export function SidebarItem({ route, isExpanded, onClick }) {
  const Icon = route.icon;

  return (
    <ItemLink to={route.path} $isExpanded={isExpanded} onClick={onClick}>
      {Icon && <Icon />}
      <span>{route.label}</span>
    </ItemLink>
  );
}
