import { FC, Fragment, useCallback } from "react";
import { useGetAltTasks } from "../../hooks/api/tasks.api.hooks";
import { Loading } from "../_UI/Loading/Loading";
import { Update } from "../_UI/Update/Update";
import { ShowError } from "../_UI/ShowError/ShowError";
import { AltTasksListItem } from "./AltTasksList.item";
import { Link } from "react-router-dom";
import { useInfinityScroll } from "../../hooks/useInfinityScroll";

export const AltTasksList: FC = () => {
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAltTasks();

  const fetchNext = useCallback(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage().then();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useInfinityScroll(document, fetchNext, 300);

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
    </>
  );
};
