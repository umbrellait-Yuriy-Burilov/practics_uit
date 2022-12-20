import { FC } from "react";
import { ShowErrorProps } from "./ShowError.types";

export const ShowError: FC<ShowErrorProps> = ({ isError , error }) => {
  if (!isError) {
    return null
  }

  if (error instanceof Error) {
    return <p>{error.message}</p>;
  }

  if (error instanceof String) {
    return <p>{error}</p>
  }

  return <p>Something went wrong</p>;
};