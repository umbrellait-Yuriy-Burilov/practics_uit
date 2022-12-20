import styled, { CSSObject } from "styled-components";
import { FC, PropsWithChildren } from "react";

type VariantsType = "primary" | "ghost" | "link";
type SizesType = "big" | "default" | "small";

export type ButtonPropsType = PropsWithChildren & {
  variant?: VariantsType;
  size?: SizesType;
};

const ghost: CSSObject = {
  color: "#333",
  background: "transparent",
};

const variant: Record<VariantsType, CSSObject> = {
  primary: {
    color: "#fff",
    background: "green",
  },
  ghost: {
    ...ghost,
  },
  link: {
    ...ghost,
    border: "none",
  },
};

const big: CSSObject = {
  fontSize: "20px",
  lineHeight: "24px",
};

const small: CSSObject = {
  fontSize: "12px",
  lineHeight: "14px",
};

const StyledButton = styled.button<
  Required<Pick<ButtonPropsType, "variant" | "size">>
>`
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  ${(props) => variant[props.variant]} // Obj vs switch
  ${({ size }) => {
    switch (size) {
      case "big":
        return big;
      case "small":
        return small;
    }
  }}
`;

// StyledButton.defaultProps = {
//   variant: "primary",
//   size: "default",
// };

const Button: FC<ButtonPropsType> = ({
  variant = "primary",
  size = "default",
  ...props
}) => {
  return <StyledButton variant={variant} size={size} {...props} />;
};

export default Button;
