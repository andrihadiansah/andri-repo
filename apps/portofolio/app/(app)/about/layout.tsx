import type { Metadata } from "next";
import React from "react";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@workspace/ui/components/page-header";
import Link from "next/link";
import { buttonVariants } from "@workspace/ui/components/button";
import { CalendarPlus, MessageCircle, Phone } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Ping } from "@workspace/ui/components/ping";

export const metadata: Metadata = {
  title: "Who I Am",
  description: "Learn about my journey, experiences, and what drives me.",
};

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AppLayoutProps) {
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
            href={"/contact"}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "sm",
              }),
              ""
            )}
          >
            <CalendarPlus />
            Schedule a call
          </Link>
        </PageActions>
      </PageHeader>
      <main
        className="container-wrapper border-grid flex flex-1 flex-col
      px-16 max-md:px-8 py-8 gap-8 relative"
      >
        {children}
      </main>
    </>
  );
}
