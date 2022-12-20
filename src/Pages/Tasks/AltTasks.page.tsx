import { FC } from "react";
import { AltTasksList } from "../../Components/AltTasksList/AltTasksList";
import { useGetAltTasks, usePutTask } from "../../hooks/api/tasks.api.hooks";
import { Loading } from "../../Components/_UI/Loading/Loading";
import { ShowError } from "../../Components/_UI/ShowError/ShowError";
import { Update } from "../../Components/_UI/Update/Update";
import { Link } from "react-router-dom";
import Button from "../../Components/_UI/Button/Button";

export const AltTasksPage: FC = () => {
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

  const { mutate } = usePutTask();

  const onInView = () => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage().then();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <p>
        <Link to={"/"}>
          <Button>{`<`} home</Button>
        </Link>
      </p>

      <AltTasksList
        taskPages={data}
        onTaskUpdate={(task) => mutate(task)}
        onInView={onInView}
      />
      <ShowError isError={isError} error={error} />

      <br />
      <Update isUpdate={isFetching} />
    </>
  );
};
