import { FC, useState } from "react";
import { TaskType } from "../../models/task.type";
import { StyledTaskList } from "./TaskList.styled";
import { Task } from "../Task/Task";
import { TaskListTypes } from "./TaskList.types";

export const TaskList: FC<TaskListTypes> = (props) => {
  const [tasks, setTasks] = useState(props.tasks.sort(sortByPined));

  const onChangePinned = (id: number) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id) as TaskType;
    task.pinned = !task.pinned;
    setTasks([...newTasks.sort(sortByPined)]);
  };

  const onChangeState = (id: number) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id) as TaskType;
    task.state = !task.state;
    setTasks([...newTasks]);
  };

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChangePinned={onChangePinned}
          onChangeState={onChangeState}
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
