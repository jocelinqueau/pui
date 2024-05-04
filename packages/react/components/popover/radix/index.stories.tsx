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
  Grid,
  Inset,
  Heading,
} from "@radix-ui/themes";
import { ChatBubbleIcon, Link1Icon } from "@radix-ui/react-icons";
import { Popover as PopoverPrimitive } from "@radix-ui/themes";
import { forwardRef } from "react";

export default {
  title: "Popover/Radix",
  component: Popover,
};
type Story = StoryObj<typeof Popover>;

const CommentButton = forwardRef<any, any>((props, forwardedRef) => (
  <Button variant="soft" {...props} ref={forwardedRef}>
    <ChatBubbleIcon width="16" height="16" />
    Comment
  </Button>
));

export const Primary: Story = {
  args: {
    trigger: <CommentButton />,
    content: (
      <Flex
        gap="3"
        className="bg"
        style={{
          backgroundColor: "var(--",
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
    ),
  },
};

// inset only show how it works without padding
export const WithInset: Story = {
  args: {
    trigger: <CommentButton />,
    content: (
      <Grid columns="130px 1fr">
        <Inset side="left" pr="current">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?&auto=format&fit=crop&w=400&q=80"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Inset>

        <div>
          <Heading size="2" mb="1">
            Share this image
          </Heading>
          <Text as="p" size="2" mb="4" color="gray">
            Minimalistic 3D rendering wallpaper.
          </Text>

          <Flex direction="column" align="stretch">
            <PopoverPrimitive.Close>
              <Button size="1" variant="soft">
                <Link1Icon width="16" height="16" />
                Copy link
              </Button>
            </PopoverPrimitive.Close>
          </Flex>
        </div>
      </Grid>
    ),
  },
};
