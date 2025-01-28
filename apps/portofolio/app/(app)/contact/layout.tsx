import type { Metadata } from "next";
import React from "react";
import { NavWrapper, NavLinks } from "@/components/main-nav";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@workspace/ui/components/page-header";
import Link from "next/link";
import { Button, buttonVariants } from "@workspace/ui/components/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Feel free to reach out to me for collaborations or inquiries.",
};

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function ContactLayout({ children }: AppLayoutProps) {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>{`${metadata.title}`}</PageHeaderHeading>
        <PageHeaderDescription>{`${metadata.description}`}</PageHeaderDescription>
        <PageActions className="flex gap-2">
          <Link
            href={"/about"}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "sm",
              }),
              ""
            )}
          >
            About me
          </Link>
          <Link
            href={"/about"}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "sm",
              }),
              ""
            )}
          >
            Discover my projects
          </Link>
        </PageActions>
      </PageHeader>
      <NavWrapper className="max-md:hidden top-16 border-t-0 z-50">
        <NavLinks />
      </NavWrapper>
      <main
        className="container-wrapper border-grid flex flex-1 flex-col
      px-16 max-md:px-8 py-8"
      >
        {children}
      </main>
    </>
  );
}
