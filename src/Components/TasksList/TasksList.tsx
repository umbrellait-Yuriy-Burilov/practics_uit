import { FC } from "react";
import { useGetTasks } from "../../hooks/api/tasks.api.hooks";
import { Loading } from "../_UI/Loading/Loading";
import { Update } from "../_UI/Update/Update";
import { ShowError } from "../_UI/ShowError/ShowError";
import { TasksListItem } from "./TasksList.item";
import { Link } from "react-router-dom";

export const TasksList: FC = () => {
  const { data, isLoading, isFetching, isError, error } = useGetTasks();

  const tasks = data || [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ShowError isError={isError} error={error} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>
              <TasksListItem task={task} />
            </Link>
          </li>
        ))}
      </ul>
      <Update isUpdate={isFetching} />
    </>
  );
};
