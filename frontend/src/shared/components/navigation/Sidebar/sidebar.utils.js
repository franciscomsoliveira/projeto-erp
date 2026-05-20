export function isRouteActive(pathname, route) {
  if (!route) return false;

  if (route.path && pathname === route.path) {
    return true;
  }

  if (route.children) {
    return route.children.some((child) => pathname === child.path);
  }

  return false;
}
