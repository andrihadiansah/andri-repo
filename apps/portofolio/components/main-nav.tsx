"use client";
import { cn } from "@workspace/ui/lib/utils";
import { buttonVariants } from "@workspace/ui/components/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CodeIcon, Home, Pen, Phone, UserSearch } from "lucide-react";
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";

function NavWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "border-grid container-wrapper border-y z-40 sticky",
        className
      )}
      {...props}
    >
      <div
        className="px-8 max-md:px-4 pt-2
        backdrop-blur-xs"
      >
        {children}
      </div>
    </nav>
  );
}

interface LinkItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}
const links: LinkItem[] = [
  { href: "/", label: "Home", icon: <Home /> },
  { href: "/experiments", label: "Experiments", icon: <CodeIcon /> },
  { href: "/about", label: "About Me", icon: <UserSearch /> },
  { href: "/contact", label: "Contact", icon: <Phone /> },
  { href: "/thoughts", label: "Writing", icon: <Pen /> },
];

function NavLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  return (
    <ScrollArea>
      <div className={cn("w-full flex flex-row gap-2", { ...props })}>
        {links
          .filter((link) => link.href !== "/" || pathname !== "/")
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: pathname === link.href ? "default" : "secondary",
                }),
                  "w-full",
                  { ...props }
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
      </div>
      <div className="h-2" />
      <ScrollBar orientation="horizontal" className="" />
    </ScrollArea>
  );
}

export { NavWrapper, NavLinks };
