import Button from './Button';
import { ReactComponent as ServIcon } from '../../Images/icons/sevices.svg';

export default {
  title: 'Tools/Button',
  componrnt: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary',
  variant: 'btn-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Secondary',
  Icon: ServIcon,
  variant: 'btn-secondary',
};

export const Card = Template.bind({});
Card.args = {
  title: 'Card',
  Icon: ServIcon,
  variant: 'btn-card',
};
