import Button from './Button';

export default {
  title: 'Tools/Button',
  componrnt: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary',
};

export const secondary = Template.bind({});
secondary.args = {
  title: 'secondary',
  isIcon: true,
};
