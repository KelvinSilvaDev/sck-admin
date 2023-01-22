import React from "react";

import { TokenApiProvider } from "./useTokenApi";

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <TokenApiProvider>{children}</TokenApiProvider>;
}

export default AppProvider;
