import React from "react";
import { cn } from "@workspace/ui/lib/utils";

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn("border-grid  max-md:border-b", className)}
      {...props}
    >
      <div className="container-wrapper">
        <div
          className=" flex flex-col items-start gap-4
          px-8 max-md:px-4
          py-6 max-md:py-5"
        >
          {children}
        </div>
      </div>
    </section>
  );
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("text-4xl font-bold leading-tight", className)}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        " text-balance text-lg font-light text-foreground  pt-2",
        className
      )}
      {...props}
    />
  );
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start gap-2 pt-2",
        className
      )}
      {...props}
    />
  );
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
