import {ComponentMeta, ComponentStory} from '@storybook/react';
import {TaskForm} from './Task.form';
import {TaskType} from '../../models/task.type';

export default {
  component: TaskForm,
  title: "TaskForm Component",
  args: {
    submitText: 'submit'
  }
} as ComponentMeta<typeof TaskForm>

const Template: ComponentStory<typeof TaskForm> = (args) => {
  const onSubmit = (data: TaskType) => {
    alert(data.title);
  }
  return <TaskForm {...args} onSubmit={onSubmit} />
}

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
}