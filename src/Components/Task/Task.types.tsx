import { TaskType } from "../../models/task.type";

export type TaskPropsTypes = {
  task: TaskType;
  onChangeState: (id: number) => void;
  onChangePinned: (id: number) => void;
};
