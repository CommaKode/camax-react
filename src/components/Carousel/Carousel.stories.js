import React from 'react';
import Carousel from './Carousel';

import monitor from '../../Images/Illustrations/monitor-vector.svg';
import panel from '../../Images/Illustrations/panel-vector.svg';

export default {
  title: 'TOOLS/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Monitor = Template.bind({});
Monitor.args = {
  carImg: monitor,
  carAlt: 'Monitor',
};

export const Panel = Template.bind({});
Panel.args = {
  carImg: panel,
  carAlt: 'panel',
};
