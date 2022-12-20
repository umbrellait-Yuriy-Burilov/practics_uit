import { FC } from "react";
import Button from "../_UI/Button/Button";
import { Checkbox } from "../_UI/Checkbox/Checkbox";
import { StyledTask, TaskLabel, TaskTitle } from "./Task.styled";
import { TaskPropsTypes } from "./Task.types";

export const Task: FC<TaskPropsTypes> = ({
  task,
  after = null,
  onChangeTask = () => {},
}) => {
  const { state = false, title, pinned = false } = task;

  const onChangeState = () => {
    onChangeTask({
      ...task,
      state: !task.state,
    });
  };

  const onChangePinned = () => {
    onChangeTask({
      ...task,
      pinned: !task.pinned,
    });
  };

  return (
    <StyledTask after={after}>
      <TaskLabel>
        <Checkbox checked={state} onChange={onChangeState} />
        <TaskTitle state={state}>{title}</TaskTitle>
      </TaskLabel>
      <Button
        variant={pinned ? "primary" : "ghost"}
        onClick={onChangePinned}
        size={"small"}
        wade
      >
        {pinned ? "unpin" : "pin"}
      </Button>
      {after}
    </StyledTask>
  );
};
