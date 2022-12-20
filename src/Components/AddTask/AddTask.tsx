import { FC } from "react";
import { ShowError } from "../_UI/ShowError/ShowError";
import { usePostTask } from "../../hooks/api/tasks.api.hooks";
import { TaskType } from "../../models/task.type";
import { TaskForm } from "../TaskForm/Task.form";

export const AddTask: FC = () => {
  const { mutate, isLoading, isError, error } = usePostTask();

  const onFormSubmit = (data: Omit<TaskType, "id">) => {
    mutate(data);
  };

  return (
    <>
      <h3>Add new task</h3>
      <ShowError isError={isError} error={error} />
      <TaskForm
        onSubmit={onFormSubmit}
        isLoading={isLoading}
        submitText={isLoading ? "loading" : "save"}
      />
    </>
  );
};
