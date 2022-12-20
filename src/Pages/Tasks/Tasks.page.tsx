import { FC } from "react";
import { TasksList } from "../../Components/TasksList/TasksList";
import { TaskType, usePostTask } from "../../hooks/api/tasks.api.hooks";
import { TaskForm } from "../../Components/TaskForm/Task.form";
import { ShowError } from "../../Components/_UI/ShowError/ShowError";
import { useParams } from "react-router-dom";

export const TasksPage: FC = () => {
  const { page = 1 } = useParams();
  const { mutate, isLoading, isError, error } = usePostTask();

  const onFormSubmit = (data: Omit<TaskType, "id">) => {
    mutate(data);
  };

  return (
    <>
      <TasksList />
      <ShowError isError={isError} error={error} />
      <TaskForm
        onSubmit={onFormSubmit}
        isLoading={isLoading}
        submitText={isLoading ? "loading" : "save"}
      />

      <p>
        <button>предыдущая</button>
        {` ${page} `}
        <button>следующая</button>
      </p>
    </>
  );
};