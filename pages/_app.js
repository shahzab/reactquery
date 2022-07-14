import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../styles/custom.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { FocusStyleManager } from "@blueprintjs/core";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  /// Disable BluePrint Focus Outline
  FocusStyleManager.onlyShowFocusOnTabs();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
