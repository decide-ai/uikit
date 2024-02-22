import type { Preview } from "@storybook/react";
import "../src/styles/tailwind.css";
import "../src/styles/global.css";
import "../src/styles/colors.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
