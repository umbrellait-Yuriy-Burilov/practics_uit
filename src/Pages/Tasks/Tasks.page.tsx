import { FC, useCallback, useMemo } from "react";
import { useGetTasks, usePutTask } from "../../hooks/api/tasks.api.hooks";
import { ShowError } from "../../Components/_UI/ShowError/ShowError";
import { TaskType } from "../../models/task.type";
import { TaskList } from "../../Components/TaskList/TaskList";
import { Link, useParams } from "react-router-dom";
import Button from "../../Components/_UI/Button/Button";
import { Loading } from "../../Components/_UI/Loading/Loading";
import { Pagination } from "../../Components/Pagination/Pagination";
import { Update } from "../../Components/_UI/Update/Update";
import { AddTask } from "../../Components/AddTask/AddTask";
import { TaskHeader } from "./Tasks.page.styled";

export const TasksPage: FC = () => {
  const { page: queryPage = "1" } = useParams();

  const {
    data: { tasks = [], count = 0 } = {},
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetTasks(queryPage);

  const { mutate } = usePutTask();

  const pageCount = count ? Math.ceil(count / 10) : 0;

  const tasksMemo = useMemo(() => tasks, [tasks]);

  const afterRender = useCallback(
    (task: TaskType) => (
      <Link to={`/task/${task.id}`}>
        <Button size={"small"}>edit</Button>
      </Link>
    ),
    []
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <TaskHeader>
        <Link to={"/"}>
          <Button>{`<`} Home</Button>
        </Link>

        <div>
          <Update isUpdate={isFetching} />
        </div>
      </TaskHeader>

      <ShowError isError={isError} error={error} />

      <TaskList
        tasks={tasksMemo}
        after={afterRender}
        onTaskUpdate={(task: TaskType) => mutate(task)}
      />

      <Pagination
        path={"/tasks"}
        currentPage={Number(queryPage)}
        pageCount={pageCount}
      />

      <AddTask />
    </>
  );
};
