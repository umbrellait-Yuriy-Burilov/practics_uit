import { FC, memo } from "react";

export const Update = memo((({ isUpdate }) => {
  if (isUpdate) {
    return <div>Update...</div>;
  }

  return null;
}) as FC<{ isUpdate: boolean }>);