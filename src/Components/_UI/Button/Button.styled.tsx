import styled, {CSSObject} from 'styled-components';
import {ButtonPropsType, VariantsType} from './Button.types';

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

export const StyledButton = styled.button<
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
