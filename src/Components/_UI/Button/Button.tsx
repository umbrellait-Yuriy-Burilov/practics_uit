import { ForwardedRef, forwardRef } from "react";
import { ButtonPropsType } from "./Button.types";
import { StyledButton } from "./Button.styled";

const Button = forwardRef(
  (
    { variant = "primary", size = "default", ...props }: ButtonPropsType,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return <StyledButton {...props} ref={ref} variant={variant} size={size} />;
  }
);

export default Button;
