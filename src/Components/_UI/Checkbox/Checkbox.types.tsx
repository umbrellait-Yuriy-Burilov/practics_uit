import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type HTMLCheckboxElement = HTMLInputElement & { type: "checkbox" };

export type CheckboxPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLCheckboxElement>,
  HTMLCheckboxElement
>;
