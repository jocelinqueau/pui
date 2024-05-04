import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  TextArea,
  Text
} from "@radix-ui/themes";
import Popover from "./index"
import { StoryObj } from "@storybook/react";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default {
  title: 'Popover/Floating',
  component: Popover,
}

type Story = StoryObj<typeof Popover>;


export const Primary: Story = {
  args: {
    trigger: (
      <Button variant="soft">
      <ChatBubbleIcon width="16" height="16" />
      Comment
    </Button>
    ),
    content: (
      <Flex
        gap="3"
        className="bg-slate-100 p-4 rounded-md shadow-sm"
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

              <Button size="1">Comment</Button>
          </Flex>
        </Box>
      </Flex>
    ),
  },
};
