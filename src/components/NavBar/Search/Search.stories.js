import Search from './Search';

export default {
  title: 'NavBar/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Mobile = Template.bind({});
Mobile.args = {
  variant: 'search-mobile',
};

export const Desktop = Template.bind({});
Desktop.args = {
  variant: 'search-desktop',
};
