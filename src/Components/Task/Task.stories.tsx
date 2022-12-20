import { Task } from "./Task";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { TaskType } from "../../models/task.type";
import Button from '../_UI/Button/Button';

const initTask: TaskType = {
  id: 0,
  title: "Task for storybook",
};

export default {
  component: Task,
  title: "Task Component",
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
    task: initTask,
  },
  argTypes: {
    task: {
      options: ["task", "pinned", "checked"],
      mapping: {
        task: {
          ...initTask,
        },
        pinned: {
          ...initTask,
          pinned: true,
        },
        checked: {
          ...initTask,
          state: true,
        },
      },
      control: {
        value: "task",
      },
    },
    after: {
      defaultValue: 'none',
      options: ['none','button'],
      mapping: {
        none: null,
        button: <Button size={'small'}>button</Button>
      }
    }
  },
  parameters: {}, // for all component of story
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = ({
  task: initTask,
  onChangeTask,
  ...args
}) => {
  const [task, setTaskState] = useState(initTask);

  useEffect(() => {
    setTaskState(initTask);
  }, [initTask]);

  return (
    <Task
      task={task}
      onChangeTask={(task) => setTaskState(task)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithButton = Template.bind({});
WithButton.args = {
  after: <Button size={'small'}>button</Button>
}
