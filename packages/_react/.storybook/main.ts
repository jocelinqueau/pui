import type { StorybookConfig } from "@storybook/react-vite";
import path from 'path'

const config:StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../examples/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
        }
      }
    });
  },
};
export default config;
