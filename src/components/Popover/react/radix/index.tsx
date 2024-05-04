import {Popover as PopoverPrimitive} from "@radix-ui/themes";

import '@/index.css'
import { ComponentPropsWithout, RemovedProps } from "@radix-ui/themes/helpers";


interface PopoverTriggerProps
  extends ComponentPropsWithout<typeof PopoverPrimitive.Trigger, RemovedProps> {}

interface PopoverProps {
  trigger:  React.ForwardRefExoticComponent<PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>
  content: React.ReactNode;
}

const Popover = ({ trigger, content }: PopoverProps) => {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content>{content}</PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};

export default Popover;
