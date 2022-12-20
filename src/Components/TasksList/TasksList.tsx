import { FC } from "react";
import { useGetTasks } from "../../hooks/api/tasks.api.hooks";
import { Loading } from "../_UI/Loading/Loading";
import { Update } from "../_UI/Update/Update";
import { ShowError } from "../_UI/ShowError/ShowError";
import { TasksListItem } from "./TasksList.item";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "../Pagination/Pagination";

export const TasksList: FC = () => {
  const { page = "1" } = useParams();
  const { data, isLoading, isFetching, isError, error } = useGetTasks(page);

  const tasks = data?.tasks ?? [];
  const count = data?.count ?? 0;
  const pageCount = count ? Math.ceil(count / 10) : 0;

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

      <Pagination
        path={"/tasks"}
        currentPage={Number(page)}
        pageCount={pageCount}
      />

      <Update isUpdate={isFetching} />
    </>
  );
};
