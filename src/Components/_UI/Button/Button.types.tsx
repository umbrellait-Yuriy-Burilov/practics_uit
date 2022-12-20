import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

export type VariantsType = "primary" | "ghost" | "link";
export type SizesType = "big" | "default" | "small";

export type ButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: VariantsType;
  size?: SizesType;
};