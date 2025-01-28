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
import { buttonVariants } from "@workspace/ui/components/button";
import { MessageSquare } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Ping } from "@workspace/ui/components/ping";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Projects, Mini App and other things i have built",
};

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function ExperimentsLayout({ children }: AppLayoutProps) {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>{`${metadata.title}`}</PageHeaderHeading>
        <PageHeaderDescription>{`${metadata.description}`}</PageHeaderDescription>
        <PageActions className="flex gap-2">
          <Link
            href={"/contact"}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "sm",
              }),
              ""
            )}
          >
            <Ping color={"green-500"} />
            Open to work
          </Link>
          <Link
            href={"/thought"}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "sm",
              }),
              ""
            )}
          >
            Documents
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
