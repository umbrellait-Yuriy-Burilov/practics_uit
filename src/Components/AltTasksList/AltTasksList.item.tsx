import { TaskType } from "../../hooks/api/tasks.api.hooks";
import { FC } from "react";

export const AltTasksListItem: FC<{ task: TaskType }> = ({ task }) => {
  return (
    <>
      <h3>{task.title}</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis
        delectus, dolore doloremque dolores ea earum enim facilis, harum ipsam
        nostrum optio quaerat quidem quis sapiente temporibus unde velit,
        voluptatem.
      </p>
    </>
  );
};
