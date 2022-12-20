import { ForwardedRef, forwardRef } from "react";
import { CheckboxPropsType } from "./Checkbox.types";
import { StyledCheckbox } from "./Checkbox.styled";

export const Checkbox = forwardRef(
  (
    { checked, onChange, ...props }: CheckboxPropsType,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledCheckbox {...props} checked={checked} ref={ref} type="checkbox" />
    );
  }
);
