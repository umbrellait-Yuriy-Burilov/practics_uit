import { FC } from "react";
import { ShowErrorProps } from "./ShowError.types";

export const ShowError: FC<ShowErrorProps> = ({ isError , error }) => {
  if (!isError) {
    return null
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  if (error instanceof String) {
    return <div>{error}</div>
  }

  return <div>Something went wrong</div>;
};