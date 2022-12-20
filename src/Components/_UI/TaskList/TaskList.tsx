import { FC } from "react";
import { TaskType } from "../../../hooks/api/tasks.api.hooks";
import { Task } from "../Task/Task";

export const TaskList: FC<{ tasks: TaskType[] }> = ({ tasks }) => {
  if (tasks.length === 0) {
    return <div>empty list</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
