import { FC, memo } from "react";

export const Update = memo((({ isUpdate }) => {
  if (isUpdate) {
    return <p>Update...</p>;
  }

  return null;
}) as FC<{ isUpdate: boolean }>);