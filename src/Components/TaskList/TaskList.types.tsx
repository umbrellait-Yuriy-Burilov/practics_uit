import { TasksType, TaskType } from "../../models/task.type";

export type TaskListTypes = {
  tasks: TasksType;
  after?: (task: TaskType) => JSX.Element;
  onTaskUpdate?: (task: TaskType) => void;
};
