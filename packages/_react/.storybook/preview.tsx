import React from "react";

import type { Preview } from "@storybook/react";

import { Theme, Reset } from '@radix-ui/themes';

import "@/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme>
        <Reset>
          <Story />
        </Reset>
      </Theme>
    )
  ]
};

export default preview;
