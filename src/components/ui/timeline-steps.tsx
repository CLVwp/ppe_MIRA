"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const timelineStepsVariants = cva("flex", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row overflow-x-auto",
    },
    position: {
      left: "",
      right: "",
      alternate: "",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    position: "left",
  },
});

interface TimelineStepsProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof timelineStepsVariants> {}

function TimelineSteps({
  className,
  orientation,
  position,
  ...props
}: TimelineStepsProps) {
  return (
    <div
      data-slot="timeline-steps"
      data-orientation={orientation}
      data-position={position}
      className={cn(timelineStepsVariants({ orientation, position }), className)}
      {...props}
    />
  );
}

const timelineStepsItemVariants = cva("relative flex flex-col", {
  variants: {
    orientation: {
      vertical: "pb-8 last:pb-0",
      horizontal: "min-w-0 flex-1 shrink-0 items-center",
    },
    status: {
      default: "",
      completed: "",
      current: "",
      upcoming: "opacity-60",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    status: "default",
  },
});

interface TimelineStepsItemProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof timelineStepsItemVariants> {}

function TimelineStepsItem({
  className,
  orientation,
  status,
  ...props
}: TimelineStepsItemProps) {
  return (
    <div
      data-slot="timeline-steps-item"
      data-status={status}
      className={cn(
        timelineStepsItemVariants({ orientation, status }),
        className
      )}
      {...props}
    />
  );
}

const timelineStepsConnectorVariants = cva("", {
  variants: {
    orientation: {
      vertical:
        "absolute left-[calc(var(--timeline-steps-icon-size,2.5rem)/2)] top-[var(--timeline-steps-icon-size,2.5rem)] h-[calc(100%-var(--timeline-steps-icon-size,2.5rem))] w-px -translate-x-1/2",
      horizontal:
        "absolute top-3 left-[calc(50%+0.75rem)] h-px w-[calc(100%-1.5rem)]",
    },
    variant: {
      default: "bg-border",
      dashed: "border-l border-dashed border-border bg-transparent",
      dotted: "border-l border-dotted border-border bg-transparent",
    },
    status: {
      default: "",
      completed: "bg-primary",
      current: "bg-gradient-to-b from-primary to-border",
      upcoming: "bg-muted",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    variant: "default",
    status: "default",
  },
});

interface TimelineStepsConnectorProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof timelineStepsConnectorVariants> {}

function TimelineStepsConnector({
  className,
  orientation,
  variant,
  status,
  ...props
}: TimelineStepsConnectorProps) {
  return (
    <div
      data-slot="timeline-steps-connector"
      aria-hidden="true"
      className={cn(
        timelineStepsConnectorVariants({ orientation, variant, status }),
        className
      )}
      {...props}
    />
  );
}

function TimelineStepsHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-steps-header"
      className={cn("flex items-center gap-3", className)}
      {...props}
    />
  );
}

const timelineStepsIconVariants = cva(
  "relative z-10 flex shrink-0 items-center justify-center rounded-full border bg-background [--timeline-steps-icon-size:2.5rem]",
  {
    variants: {
      size: {
        sm: "size-6 [--timeline-steps-icon-size:1.5rem] [&>svg]:size-3",
        default:
          "size-10 [--timeline-steps-icon-size:2.5rem] [&>svg]:size-4",
        lg: "size-12 [--timeline-steps-icon-size:3rem] [&>svg]:size-5",
      },
      variant: {
        default: "border-border text-muted-foreground",
        primary: "border-primary bg-primary text-primary-foreground",
        secondary: "border-secondary bg-secondary text-secondary-foreground",
        destructive:
          "border-destructive bg-destructive text-destructive-foreground",
        outline: "border-border bg-background text-foreground",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

interface TimelineStepsIconProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof timelineStepsIconVariants> {}

function TimelineStepsIcon({
  className,
  size,
  variant,
  ...props
}: TimelineStepsIconProps) {
  return (
    <div
      data-slot="timeline-steps-icon"
      className={cn(timelineStepsIconVariants({ size, variant }), className)}
      {...props}
    />
  );
}

function TimelineStepsContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-steps-content"
      className={cn(
        "ms-[3.25rem] flex flex-col gap-1 pt-0.5 pb-2",
        className
      )}
      {...props}
    />
  );
}

function TimelineStepsTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-steps-title"
      className={cn(
        "text-foreground font-medium leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function TimelineStepsDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-steps-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function TimelineStepsTime({
  className,
  ...props
}: React.ComponentProps<"time">) {
  return (
    <time
      data-slot="timeline-steps-time"
      className={cn("text-muted-foreground text-xs", className)}
      {...props}
    />
  );
}

export {
  TimelineSteps,
  TimelineStepsItem,
  TimelineStepsConnector,
  TimelineStepsHeader,
  TimelineStepsIcon,
  TimelineStepsContent,
  TimelineStepsTitle,
  TimelineStepsDescription,
  TimelineStepsTime,
};
