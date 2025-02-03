"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CustomComponents, DayPicker } from "react-day-picker";

import { cn } from "@workspace/ui/lib/utils";
import { buttonVariants } from "@workspace/ui/components/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col space-y-2 sm:space-x-2 sm:space-y-0",
        month: "space-y-2",
        month_caption: "flex justify-between mx-2 border-b py-2 ",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex absolute right-3 top-4 justify-between ",
        button_previous: cn(
          buttonVariants({ variant: "secondary" }),
          "h-7 w-7  p-0  hover:opacity-100"
        ),
        button_next: cn(
          buttonVariants({ variant: "secondary" }),
          "h-7 w-7  p-0  hover:opacity-100"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        week: "flex w-full mt-1 first:justify-end",
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 rounded-lg",
          props.mode === "range"
            ? "day-range-start day-range-end"
            : "rounded-lg"
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        range_start: "day-range-start",
        range_end: "day-range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={
        {
          IconLeft: ({
            className,
            ...props
          }: {
            className: string;
            [key: string]: any;
          }) => <ChevronLeft className={cn("h-4 w-4", className)} {...props} />,
          IconRight: ({
            className,
            ...props
          }: {
            className: string;
            [key: string]: any;
          }) => (
            <ChevronRight className={cn("h-4 w-4", className)} {...props} />
          ),
        } as Partial<CustomComponents>
      }
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
