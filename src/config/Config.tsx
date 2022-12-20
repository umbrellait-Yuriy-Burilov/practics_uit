import { FC } from "react";
import { QueryProvider } from "./QueryProvider";
import { App } from "../Components/App/App";

export const Config: FC = () => {
  return (
    // <StrictMode>
      <QueryProvider>
        <App />
      </QueryProvider>
    // </StrictMode>
  );
};
