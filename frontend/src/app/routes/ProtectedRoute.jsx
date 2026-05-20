import { Suspense } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "@/core/auth";
import { hasPermission } from "@/core/permissions";

import { RouteFallback } from "./RouteFallback";

export function ProtectedRoute({ route }) {
  const { signed, user, loading } = useAuth();

  if (loading) return <RouteFallback />;

  if (!signed) {
    return <Navigate to="/login" replace />;
  }

  if (route?.permission && !hasPermission(user, route.permission)) {
    return <Navigate to="/dashboard" replace />;
  }

  const Component = route.component;

  if (!Component) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Suspense fallback={<RouteFallback />}>
      <Component />
    </Suspense>
  );
}
