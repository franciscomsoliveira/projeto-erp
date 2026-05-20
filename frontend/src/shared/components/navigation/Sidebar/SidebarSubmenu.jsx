import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { SidebarItem } from "./SidebarItem";

import { SubmenuButton, SubmenuContent, Chevron } from "./styles";

export function SidebarSubmenu({ route, isExpanded, onNavigate }) {
  const [open, setOpen] = useState(false);

  const Icon = route.icon;

  function handleToggle() {
    if (!isExpanded) return;
    setOpen((state) => !state);
  }

  return (
    <div>
      <SubmenuButton
        type="button"
        $isExpanded={isExpanded}
        onClick={handleToggle}
      >
        {Icon && <Icon />}
        <span>{route.label}</span>

        <Chevron $open={open} $isExpanded={isExpanded}>
          <FiChevronDown />
        </Chevron>
      </SubmenuButton>

      <SubmenuContent $open={open} $isExpanded={isExpanded}>
        {route.children.map((child) => (
          <SidebarItem
            key={child.key}
            route={child}
            isExpanded={isExpanded}
            onClick={onNavigate}
          />
        ))}
      </SubmenuContent>
    </div>
  );
}
