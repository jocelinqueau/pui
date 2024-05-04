import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ComponentPropsWithout, RemovedProps } from "@radix-ui/themes/helpers";

interface TooltipTriggerProps
  extends ComponentPropsWithout<
    typeof TooltipPrimitive.Trigger,
    RemovedProps
  > {}

interface TooltipProps {
  trigger: React.ForwardRefExoticComponent<
    TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>
  >;
  content: React.ReactNode;
  withArrow?: boolean;
}
const Tooltip = ({ trigger, content, withArrow = false }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{trigger}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className="TooltipContent" sideOffset={5}>
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
