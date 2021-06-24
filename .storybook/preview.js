import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { addParameters } from '@storybook/react';
import { withDirection } from 'storybook-rtl-addon';

addParameters({
  locales: {
    en: { dir: 'ltr', name: 'English', text: 'English' },
    fa: { dir: 'rtl', name: 'Persian', text: 'فارسی' },
  },
  defaultLocale: 'fa',
});

import '../src/scss/_reset.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withDirection);
