import Tooltip from './Tooltip';

export default {
  title: 'Tools/Tooltip',
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'copy text',
  cName: 'dark',
};
