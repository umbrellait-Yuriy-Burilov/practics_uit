import { Task } from "./Task";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { TaskType } from "../../models/task.type";

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
  },
  parameters: {}, // for all component of story
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = ({
  task,
  onChangeTask,
  ...args
}) => {
  const [state, setState] = useState(task.state);
  const [pinned, setPinned] = useState(task.pinned);

  useEffect(() => {
    setState(task.state);
    setPinned(task.pinned);
  }, [task]);

  return (
    <Task
      task={{ ...task, state, pinned }}
      onChangeTask={() => {}}
      // onChangeState={() => setState(!state)}
      // onChangePinned={() => setPinned(!pinned)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
