import { FC, useEffect, useState } from "react";
import { TaskType } from "../../models/task.type";
import { StyledTaskList } from "./TaskList.styled";
import { Task } from "../Task/Task";
import { TaskListTypes } from "./TaskList.types";

export const TaskList: FC<TaskListTypes> = ({
  after,
  tasks,
  onTaskUpdate = () => {},
}) => {
  const [sortedTasks, setSortedTasks] = useState(tasks.sort(sortByPined));

  useEffect(() => {
    setSortedTasks(tasks.sort(sortByPined));
  }, [tasks]);

  const onChangeTask = (changedTask: TaskType) => {
    const newTasks = [...tasks].map((task) =>
      task.id === changedTask.id ? changedTask : task
    );
    setSortedTasks([...newTasks.sort(sortByPined)]);
    onTaskUpdate(changedTask);
  };

  return (
    <StyledTaskList>
      {sortedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChangeTask={onChangeTask}
          after={after ? after(task) : null}
        />
      ))}
    </StyledTaskList>
  );

  function sortByPined(a: TaskType, b: TaskType) {
    if (a.pinned === b.pinned) {
      return a.id - b.id;
    }
    return a.pinned ? -1 : 1;
  }
};
