import { hasPermission } from "@/core/permissions";

import { ROUTES_CONFIG } from "./routes.config";

export function canAccessRoute(route, user) {
  if (!route) return false;

  if (!route.private) return true;

  if (!route.permission) return true;

  return hasPermission(user, route.permission);
}

export function getMenuRoutes(user, routes = ROUTES_CONFIG) {
  return routes
    .filter((route) => route.sidebar)
    .filter((route) => !route.hidden)
    .map((route) => {
      if (!route.children) {
        return route;
      }

      const children = route.children
        .filter((child) => child.sidebar)
        .filter((child) => !child.hidden)
        .filter((child) => canAccessRoute(child, user));

      return {
        ...route,
        children,
      };
    })
    .filter((route) => {
      if (route.children) {
        return route.children.length > 0;
      }

      return canAccessRoute(route, user);
    });
}

export function getFlatRoutes(routes = ROUTES_CONFIG) {
  return routes.flatMap((route) => {
    if (route.children) {
      return getFlatRoutes(route.children);
    }

    if (route.path && route.component) {
      return [route];
    }

    return [];
  });
}

export function findRouteByPath(pathname, routes = ROUTES_CONFIG) {
  for (const route of routes) {
    if (route.path === pathname) return route;

    if (route.children) {
      const found = findRouteByPath(pathname, route.children);

      if (found) return found;
    }
  }

  return null;
}

export function getRouteMeta(pathname) {
  return findRouteByPath(pathname)?.meta || {};
}

export function getBreadcrumb(pathname) {
  return getRouteMeta(pathname)?.breadcrumb || [];
}

export function getPageTitle(pathname) {
  return getRouteMeta(pathname)?.title || "";
}
