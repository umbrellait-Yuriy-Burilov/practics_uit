import { FC } from "react";
import { QueryProvider } from "./QueryProvider";
import { RouterProvider } from "./RouterProvider";

export const Config: FC = () => {
  return (
    // <StrictMode>
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
    // </StrictMode>
  );
};
