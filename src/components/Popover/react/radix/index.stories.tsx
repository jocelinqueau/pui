import { StoryObj } from "@storybook/react";
import Popover from "./index";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  TextArea,
  Text,
} from "@radix-ui/themes";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import {Popover as PopoverPrimitive} from "@radix-ui/themes";
import { forwardRef } from "react";


export default {
  title: "popover/radix",
  component: Popover,

};
type Story = StoryObj<typeof Popover>;

const CommentButton = forwardRef<any,any>((props,forwardedRef) => (
  <Button variant="soft" {...props} ref={forwardedRef}>
    <ChatBubbleIcon width="16" height="16" />
    Comment
  </Button>
))
const CommentContent = () => (
  <Flex gap="3" 
    className="bg"
  style={{
    backgroundColor: 'var(--'
  }}
  >
    <Avatar
      size="2"
      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
      fallback="A"
      radius="full"
    />
    <Box flexGrow="1">
      <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
      <Flex gap="3" mt="3" justify="between">
        <Flex align="center" gap="2" asChild>
          <Text as="label" size="2">
            <Checkbox />
            <Text>Send to group</Text>
          </Text>
        </Flex>

        <PopoverPrimitive.Close>
          <Button size="1">Comment</Button>
        </PopoverPrimitive.Close>
      </Flex>
    </Box>
  </Flex>
);


export const Primary: Story = {
  args: {
    trigger: <CommentButton />,
    content: <CommentContent />,
  },
};
