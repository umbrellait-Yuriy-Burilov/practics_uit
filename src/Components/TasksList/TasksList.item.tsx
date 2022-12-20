import { TaskType } from "../../hooks/api/tasks.api.hooks";
import { FC } from "react";

export const TasksListItem: FC<{ task: TaskType }> = ({ task }) => {
  return <>{task.title}</>;
};