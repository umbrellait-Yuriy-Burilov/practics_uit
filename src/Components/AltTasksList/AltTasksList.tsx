import { FC, useEffect } from "react";
import { useGetAltTasks } from "../../hooks/api/tasks.api.hooks";
import { Loading } from "../_UI/Loading/Loading";
import { Update } from "../_UI/Update/Update";
import { ShowError } from "../_UI/ShowError/ShowError";
import { AltTasksListItem } from "./AltTasksList.item";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

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

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage().then();
    }
  }, [ref, inView, isFetchingNextPage, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ShowError isError={isError} error={error} />

      {data?.pages.map((page, idx) => (
        <ul key={idx} ref={idx === data.pages.length - 1 ? ref : null}>
          {page.tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/task/${task.id}`}>
                <AltTasksListItem task={task} />
              </Link>
            </li>
          ))}
        </ul>
      ))}

      <Update isUpdate={isFetching} />
    </>
  );
};
