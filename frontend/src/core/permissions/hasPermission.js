import { PROFILE_PERMISSIONS } from "./profilePermissions";

export function hasPermission(user, permission) {
  if (!user || !permission) {
    return false;
  }

  const perfil = user.perfil?.toUpperCase();

  const permissions = user.permissions || PROFILE_PERMISSIONS[perfil] || [];

  return permissions.includes(permission);
}
