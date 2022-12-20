import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { ButtonPropsType, SizesType, VariantsType } from "./Button.types";

const variants: Record<VariantsType, FlattenSimpleInterpolation> = {
  primary: css`
    color: #fff;
    border-color: #1677ff;
    background: #1677ff;

    &:hover {
      background: #4096ff;
    }
  `,
  ghost: css`
    border-color: #d9d9d9;
    color: #333;
    background: transparent;

    &:hover {
      color: #4096ff;
    }
  `,
};

const sizes: Record<SizesType, FlattenSimpleInterpolation> = {
  small: css`
    font-size: 12px;
    line-height: 14px;
    height: 22px;
  `,
  default: css`
    font-size: 14px;
    line-height: 24px;
    height: 32px;
  `,
  big: css`
    font-size: 20px;
    line-height: 34px;
    height: 42px;
  `,
};

export const StyledButton = styled.button<ButtonPropsType>`
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.1s 0s ease-in;

  &:hover {
    border-color: #4096ff;
  }

  ${({ wade = false }) =>
    wade
      ? css`
          display: block;
          width: 100%;
        `
      : css`
          display: inline-block;
        `};
  ${({ size = "default" }) => sizes[size]}
  ${({ variant = "primary" }) => variants[variant]}
`;
