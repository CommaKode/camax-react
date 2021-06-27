import Hero from './Hero';

export default {
  title: 'Pages/Home/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Mobile = Template.bind({});
