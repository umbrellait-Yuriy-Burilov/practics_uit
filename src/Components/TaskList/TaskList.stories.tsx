import { TaskList } from "./TaskList";
import { TasksType, TaskType } from "../../models/task.type";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";

const initTasks: TasksType = [...Array(10)].map((task, idx) => ({
  id: idx,
  title: `Task ${idx + 1} for storybook`,
  state: Math.random() > 0.5,
  pinned: Math.random() > 0.7,
}));

export default {
  component: TaskList,
  title: "TaskList Component",
  decorators: [
    (Story) => {
      return (
        <div style={{ maxWidth: "600px" }}>
          <Story />
        </div>
      );
    },
  ],
  args: {
    tasks: initTasks,
  },
  argTypes: {
    tasks: {
      control: false,
    },
  },
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = ({
  tasks: initTasks,
  ...args
}) => {
  const [tasks, setTask] = useState(initTasks);

  useEffect(() => {
    setTask(initTasks);
  }, [initTasks]);

  const onTaskUpdate = (newTask: TaskType) => {
    setTask(
      [...tasks].map((task) => (task.id === newTask.id ? newTask : task))
    );
  };

  return <TaskList {...args} tasks={tasks} onTaskUpdate={onTaskUpdate} />;
};

export const Default = Template.bind({});
