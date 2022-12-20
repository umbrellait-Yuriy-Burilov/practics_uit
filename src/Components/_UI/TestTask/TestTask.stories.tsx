import { TestTask } from "./TestTask";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TaskType } from "../../../hooks/api/tasks.api.hooks";
import { Link } from "react-router-dom";
import React from "react";

const defaultTask: TaskType = {
  id: 1,
  title: "TestTask",
  state: false,
};

export default {
  component: TestTask,
  title: "TestTask",
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: "20px" }}>
          <p>
            <Link to={"/test"}>
              <button>
                render react-router-dom Link component without errors
              </button>
            </Link>
          </p>
          <Story />
        </div>
      );
    },
  ],
  args: {
    task: {
      ...defaultTask,
    },
    after: <button>more</button>,
  },
  argTypes: {
    task: {
      control: false,

      // убрать из таблицы
      // table: {
      //   disable: true,
      // },
    },
    after: {
      // mapping
      options: ["link", "empty"],
      mapping: {
        link: (
          <Link to={"/test"}>
            <button>
              render react-router-dom Link component without errors
            </button>
          </Link>
        ),
        empty: null,
      },
    },
  },
  parameters: {}, // for all component of story
} as ComponentMeta<typeof TestTask>;

// export const argsTypes = {
//   task: {
//     ...defaultTask,
//   },
//   after: <button>more</button>,
// };

const Template: ComponentStory<typeof TestTask> = ({ ...args }) => {
  return <TestTask {...args} />;
};

export const Default = Template.bind({});

Default.parameters = {
  backgrounds: {
    values: [
      {
        name: "red",
        value: "#F00",
      },
    ],
  },
};

/** move to default or global */
// Default.args = {
//   task: {
//     ...defaultTask,
//   },
//   after: <button>more</button>,
// };

Default.storyName = "i'm default component";
Default.play = () => {
  console.log("i'm will running after render, once time");
};

// export const Checked = () => <TestTask task={{ ...defaultTask, state: true }} />;
export const Checked = Template.bind({});
Checked.args = {
  task: {
    ...defaultTask,
    state: true,
  },
};

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...defaultTask,
//     state: "TASK_ARCHIVED",
//   },
// };
