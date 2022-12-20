import { TaskList } from "./TaskList";
import { TasksType } from "../../models/task.type";
import { ComponentMeta, ComponentStory } from "@storybook/react";

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

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);

export const Default = Template.bind({});
