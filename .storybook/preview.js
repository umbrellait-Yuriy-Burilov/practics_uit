import { BrowserRouter } from "react-router-dom";

// global params
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// global args
export const argTypes = {
  theme: { control: "select", options: ["light", "dark"] },
};
export const args = { theme: "light" };

// decorators
export const decorators = [
  (Story, Context) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];
