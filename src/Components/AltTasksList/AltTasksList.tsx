import { FC, Fragment } from "react";
import { useGetAltTasks } from "../../hooks/api/tasks.api.hooks";
import { Loading } from "../_UI/Loading/Loading";
import { Update } from "../_UI/Update/Update";
import { ShowError } from "../_UI/ShowError/ShowError";
import { AltTasksListItem } from "./AltTasksList.item";
import { Link } from "react-router-dom";

export const AltTasksList: FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAltTasks();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ShowError isError={isError} error={error} />
      <ul>
        {data?.pages.map((page, idx) => (
          <Fragment key={idx}>
            {page.tasks.map((task) => (
              <li key={task.id}>
                <Link to={`/task/${task.id}`}>
                  <AltTasksListItem task={task} />
                </Link>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>

      <Update isUpdate={isFetching} />

      {hasNextPage && (
        <p>
          <button
            disabled={isFetching}
            onClick={() => fetchNextPage()}
            style={{ display: "block", width: "100%", height: "30px" }}
          >
            get more tasks
          </button>
        </p>
      )}
    </>
  );
};
