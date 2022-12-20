import { TaskType } from "../../models/task.type";

export type OnSubmitWithoutId = (data: Omit<TaskType, "id">) => void;
export type OnSubmitWithId = (data: TaskType) => void;

export type TaskFormProps = {
  onSubmit: OnSubmitWithId | OnSubmitWithoutId;
  isLoading: boolean;
  submitText: string;
  initValue?: Partial<TaskType>;
};
