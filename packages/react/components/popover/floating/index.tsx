import { useEffect, useState } from "react";

import {
  offset,
  flip,
  shift,
  limitShift,
  useFloating,
  autoUpdate,
  useInteractions,
  useDismiss,
  useClick,
} from "@floating-ui/react";

export type FloatingPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end";

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  isVisible?: boolean;
  /**
   * spacing is the distance between the trigger/reference and the floating element
   */
  spacing: number;

  flip?: boolean;
  /**
   * placement is the position of the floating element relative to the reference
   */
  placement?: FloatingPlacement;

  /**
   * A callback function that is called when the open state changes
   */
  onOpenChange?: (open: boolean) => void;
}

const Popover = ({
  trigger,
  content,
  placement = "bottom",
  isVisible = false,
  spacing = 4,
  flip: shouldFlip = true,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(isVisible);

  const middleware = [
    offset(spacing),
    shift({
      limiter: limitShift(),
      padding: 2,
    }),
  ];

  if (shouldFlip) {
    middleware.push(flip());
  }

  const { x, y, refs, strategy, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <>
      <div
        ref={refs.setReference}
        style={{
          maxWidth: "max-content",
        }}
        className="cursor-pointer"
        {...getReferenceProps()}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            zIndex: 1,
            minWidth: "max-content",
          }}
          {...getFloatingProps()}
        >
          {content}
        </div>
      )}
    </>
  );
};

export default Popover;
