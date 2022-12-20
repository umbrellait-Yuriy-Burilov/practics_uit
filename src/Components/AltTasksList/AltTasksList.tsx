import { FC, useEffect, useState } from "react";
import { TasksResponseType } from "../../hooks/api/tasks.api.hooks";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Button from "../_UI/Button/Button";
import { Task } from "../Task/Task";
import { TaskType } from "../../models/task.type";
import { InfiniteData } from "react-query";
import { sortByPined } from "../../hooks/api/mocks/Tasks.mock";
import { StyledTaskList } from "../TaskList/TaskList.styled";
import {AltTasksListTypes} from './AltTasksList.types';
import { StyledAltTaskContainer } from "./AltTasksList.styled";


export const AltTasksList: FC<AltTasksListTypes> = ({ taskPages: initTaskPages, onTaskUpdate, onInView }) => {
  const [taskPages, setTaskPages] = useState(filterTasks(initTaskPages));

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setTaskPages(filterTasks(initTaskPages));
  }, [initTaskPages]);

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  const onChangeTask = (
    updatedTask: TaskType,
    idxPage: number,
    idxTask: number
  ) => {
    const newTaskPages: InfiniteData<TasksResponseType> =
      structuredClone(taskPages); // пока костыль

    newTaskPages.pages[idxPage].tasks[idxTask] = updatedTask;

    setTaskPages(filterTasks(newTaskPages));
    onTaskUpdate(updatedTask);
  };

  return (
    <StyledAltTaskContainer>
      {taskPages?.pages.map((page, idx) => (
        <StyledTaskList
          key={idx}
          ref={idx === taskPages.pages.length - 1 ? ref : null}
        >
          {page.tasks.map((task, idxTask) => (
            <Task
              key={task.id}
              task={task}
              onChangeTask={(task: TaskType) =>
                onChangeTask(task, idx, idxTask)
              }
              after={
                <Link to={`/task/${task.id}`}>
                  <Button size={"small"}>edit</Button>
                </Link>
              }
            />
          ))}
        </StyledTaskList>
      ))}
    </StyledAltTaskContainer>
  );
};

function filterTasks(
  taskPagesInit: InfiniteData<TasksResponseType> | undefined
) {
  if (taskPagesInit === undefined) {
    return;
  }

  const taskPages: InfiniteData<TasksResponseType> =
    structuredClone(taskPagesInit);

  let tasks: TaskType[] = [];

  taskPages.pages.forEach((page) => {
    tasks = tasks.concat(page.tasks);
  });

  tasks.sort(sortByPined);

  taskPages.pages.forEach((page) => {
    page.tasks = tasks.splice(0, 10);
  });

  return taskPages;
}
