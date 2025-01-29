import { cn } from "@workspace/ui/lib/utils";

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className={cn("border-grid border-b", className)} {...props}>
      <div className="container-wrapper">
        <section
          className="flex flex-col items-start gap-4
          px-16 max-md:px-8 py-8"
        >
          {children}
        </section>
      </div>
    </header>
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
        " text-pretty text-lg font-light text-foreground max-w-[80%] pt-2",
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
