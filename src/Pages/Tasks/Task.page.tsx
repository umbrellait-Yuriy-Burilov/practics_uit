import { FC } from "react";
import { useParams } from "react-router-dom";
import {
  TaskType,
  useGetTask,
  usePutTask,
} from "../../hooks/api/tasks.api.hooks";
import { Loading } from "../../Components/_UI/Loading/Loading";
import { TaskForm } from "../../Components/TaskForm/Task.form";
import {Update} from '../../Components/_UI/Update/Update';
import {ShowError} from '../../Components/_UI/ShowError/ShowError';

export const TaskPage: FC = () => {
  const { taskId } = useParams();
  const { data, isLoading, isFetching, isError, error } = useGetTask(taskId as string);

  const { mutate, isLoading: putIsLoading } = usePutTask();

  if (isLoading) {
    return <Loading />;
  }

  const task = data as TaskType;

  const onSubmit = (data: TaskType) => {
    mutate(data);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <Update isUpdate={isFetching} />
      <ShowError isError={isError} error={error} />
      <TaskForm
        onSubmit={onSubmit}
        submitText={putIsLoading ? "loading" : "update"}
        initValue={task}
      />
    </div>
  );
};