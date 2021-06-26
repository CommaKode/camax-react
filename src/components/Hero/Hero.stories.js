import Hero from './Hero';

export default {
  title: 'Pages/MainPage',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Mobile = Template.bind({});
