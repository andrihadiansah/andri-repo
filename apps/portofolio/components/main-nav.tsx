"use client";
import { cn } from "@workspace/ui/lib/utils";
import { buttonVariants } from "@workspace/ui/components/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";

interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}
const links: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/experiments", label: "Experiments" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex space-x-4">
      {links
        .filter((link) => link.href !== "/")
        .map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === link.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
    </nav>
  );
};

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <>
      <section className="z-40 md:hidden sticky bottom-0 container-wrapper ">
        <ScrollArea>
          <nav className="flex px-4 flex-nowrap border-t py-2 justify-center bg-background space-x-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  buttonVariants({
                    variant: pathname === link.href ? "secondary" : "outline",
                    size: "lg",
                  }),
                  pathname === link.href ? "text-bold" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <ScrollBar orientation="horizontal" />
          </nav>
        </ScrollArea>
      </section>
    </>
  );
};

export { DesktopNav, MobileNav };
