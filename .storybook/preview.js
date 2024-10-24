import '../src/index.css';

import { withThemeByClassName } from "@storybook/addon-themes";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          'ZopDev': 'zopdev',
          'Forest': 'forest'
      },
      defaultTheme: 'ZopDev',
  })]
};

export default preview;
