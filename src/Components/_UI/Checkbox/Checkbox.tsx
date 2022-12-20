import { ForwardedRef, forwardRef } from "react";
import { CheckboxPropsType } from "./Checkbox.types";
import { StyledCheckbox } from "./Checkbox.styled";

export const Checkbox = forwardRef(
  ({ ...props }: CheckboxPropsType, ref: ForwardedRef<HTMLInputElement>) => {
    return <StyledCheckbox {...props} ref={ref} type="checkbox" />;
  }
);
