import { useState } from "react";

import {
  offset,
  flip,
  shift,
  limitShift,
  useFloating,
  autoUpdate,
  useHover,
  useInteractions,
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

interface TooltipProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  isVisible?: boolean;
  withArrow?: boolean;
  spacing?: number;
  flip?: boolean;
  placement?: FloatingPlacement;
}

const Tooltip = ({
  trigger,
  content,
  isVisible = false,
  withArrow = false,
  spacing = 4,
  flip: shouldFlip = true,
  placement = "bottom",
}:TooltipProps) => {
  const [isOpen, setIsOpen] = useState(isVisible);

  const middleware = [
    offset(spacing),
    shift({
      limiter: limitShift(),
      padding: 2
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

  const hover = useHover(context)

  const {getReferenceProps, getFloatingProps} = useInteractions([
    hover
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
}

export default Tooltip;