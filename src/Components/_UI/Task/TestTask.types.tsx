import { TaskType } from "../../../hooks/api/tasks.api.hooks";

export type TaskPropTypes = {
  task: TaskType;
  after?: JSX.Element;
};
