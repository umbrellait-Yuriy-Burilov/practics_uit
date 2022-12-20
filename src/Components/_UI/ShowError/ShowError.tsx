import { FC } from "react";
import { ShowErrorProps } from "./ShowError.types";

export const ShowError: FC<ShowErrorProps> = ({ error }) => {
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return <div>Something went wrong</div>;
};