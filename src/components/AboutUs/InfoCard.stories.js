import React from 'react';
import InfoCard from './InfoCard';
import Data from './AboutUsData';

export default {
  title: 'TOOLS/Info Card',
  component: InfoCard,
};

const Template = (args) => <InfoCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Image: Data[1].Image,
  title: Data[1].title,
  txt: Data[1].txt,
};
