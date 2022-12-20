import { TaskType } from "../../models/task.type";

export type TaskPropsTypes = {
  task: TaskType;
  after?: JSX.Element | null;
  onChangeTask: (task: TaskType) => void;
};
