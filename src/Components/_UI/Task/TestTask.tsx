import { FC, useState } from "react";
import styled from "styled-components";
import { TaskPropTypes } from "./TestTask.types";

const Label = styled.label`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 8px;
  padding: 16px;
  border: 1px solid #7fbfff;
`;
export const TestTask: FC<TaskPropTypes> = ({
  task: { title, state: initialState },
  after,
}) => {
  const [state, setState] = useState(!!initialState);

  return (
    <Label>
      <input
        type="checkbox"
        checked={state}
        onChange={() => setState(!state)}
      />
      <span>{title}</span>
      {after ?? null}
    </Label>
  );
};
