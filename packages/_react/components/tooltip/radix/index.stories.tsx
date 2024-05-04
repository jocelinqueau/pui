import { StoryObj } from "@storybook/react";
import Tooltip from "./index";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

export default {
  title: "Tooltip/radix",
  component: Tooltip,
};

type Story = StoryObj<typeof Tooltip>;

const _Trigger = forwardRef<any, any>((props, forwardedRef) => (
  <button className="rounded-full shadow-lg p-2" {...props} ref={forwardedRef}>
    <ChatBubbleIcon width="16" height="16" />
  </button>
));

export const Primary: Story = {
  args: {
    trigger: <_Trigger />,
    content: <div className="p-2 bg-white rounded-sm shadow-lg">
      <p>This is a chat bubble icon</p>
    </div>,
  },
};
