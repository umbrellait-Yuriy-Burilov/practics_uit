import Button from './Button';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'Варианты внешнего вида',
      // control: {
      //   type: 'select'
      // }
    },
    children: {
      name: 'label',
      description: 'children',
      type: 'string',
      defaultValue: 'Click me!'
    },
    size: {
      defaultValue: 'default'
    }
  }
} as ComponentMeta<typeof Button>


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({});

Default.args = {
  variant: 'primary'
}

export const Link = Template.bind({});

Link.args = {
  variant: 'link'
}