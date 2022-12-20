import { FC } from "react";
import Button from "../_UI/Button/Button";
import { Checkbox } from "../_UI/Checkbox/Checkbox";
import { StyledTask, TaskLabel, TaskTitle } from "./Task.styled";
import { TaskPropsTypes } from "./Task.types";

export const Task: FC<TaskPropsTypes> = ({
  task: { id, state = false, title, pinned = false },
  onChangePinned = () => {},
  onChangeState = () => {},
}) => {
  return (
    <StyledTask>
      <TaskLabel>
        <Checkbox checked={state} onChange={() => onChangeState(id)} />
        <TaskTitle state={state}>{title}</TaskTitle>
      </TaskLabel>
      <Button
        variant={pinned ? "primary" : "ghost"}
        onClick={() => onChangePinned(id)}
        size={"small"}
        wade
      >
        {pinned ? "unpin" : "pin"}
      </Button>
    </StyledTask>
  );
};
