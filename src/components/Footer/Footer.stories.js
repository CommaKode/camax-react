import Footer from './Footer';

export default {
  title: 'Footer/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Mobile = Template.bind({});
Mobile.args = {
  variant: 'footer-mobile',
};

export const Desktop = Template.bind({});
Desktop.args = {
  variant: 'footer-desktop',
};
