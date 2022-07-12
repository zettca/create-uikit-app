import React, { Suspense } from "react";
import { HvProvider } from "@hitachivantara/uikit-react-core";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <HvProvider uiKitTheme="wicked">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HvProvider>
    </Suspense>
  );
};

export default App;
