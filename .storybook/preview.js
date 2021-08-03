import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { addParameters } from "@storybook/react";
import { withDirection } from "storybook-rtl-addon";
import store from "../src/store/store";
addParameters({
  locales: {
    en: { dir: "ltr", name: "English", text: "English" },
    fa: { dir: "rtl", name: "Persian", text: "فارسی" },
  },
  defaultLocale: "fa",
});

import "../src/scss/_reset.scss";
import ProviderWrapper from "../src/store/Provider/ProviderWrapper";
// import store from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withDirection);
addDecorator((story) => <ProviderWrapper children={story()} store={store} />);
// import { configure } from '@storybook/react'

// configure(function() {
//   require('../src/components/ComingUpNav/ComingUpNav.stories')
// }, module)