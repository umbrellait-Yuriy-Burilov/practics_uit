import styled from "styled-components";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;
  transform: translate(0, 12%);
  &:not(:last-child) {
    margin-right: 8px;
  }
  &:disabled {
    cursor: auto;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    inset: -1px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  }

  &:hover:not(:disabled):before {
    border-color: #4096ff;
  }

  &:checked:before {
    background: #1677ff;
  }

  &:disabled:before {
    background: #f3f3f3;
  }

  &:checked:hover:before {
    background: #4096ff;
  }

  &:checked:after {
    content: "";
    display: block;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    inset-inline-start: 23%;
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    width: 5px;
    height: 9px;
  }

  &:disabled:checked:after {
    border-color: #c7c7c7;
  }
`;
