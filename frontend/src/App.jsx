import { AppRoutes } from "@/app/routes";
import { AppProviders } from "@/app/providers";

import { GlobalStyles } from "@/core/styles";

function App() {
  return (
    <AppProviders>
      <GlobalStyles />

      <AppRoutes />
    </AppProviders>
  );
}

export default App;
