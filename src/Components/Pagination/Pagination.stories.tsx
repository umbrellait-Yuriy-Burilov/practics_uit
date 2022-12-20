import {Pagination} from './Pagination';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {useState} from 'react';

export default {
  component: Pagination,
  title: "Pagination Component",
  decorators: [
    (Story) => <p>
      <Story />
  </p>
  ],

} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage)

  return <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage}/>
}

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  pageCount: 10
}

