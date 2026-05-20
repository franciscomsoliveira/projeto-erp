import { useLocation } from "react-router-dom";

import { getBreadcrumb, getPageTitle } from "@/app/routes/routeHelpers";

export function useBreadcrumb() {
  const { pathname } = useLocation();

  return {
    items: getBreadcrumb(pathname),
    title: getPageTitle(pathname),
  };
}
