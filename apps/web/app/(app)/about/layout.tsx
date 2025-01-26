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
import { Button } from "@workspace/ui/components/button";
import { MessageCircle } from "lucide-react";

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
          <Link href="/contact">
            <Button variant="outline" withIndicator="bg-green-500">
              Open to Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" withIcon={<MessageCircle />}>
              Get in Touch
            </Button>
          </Link>
        </PageActions>
      </PageHeader>
      <NavWrapper className="max-md:hidden top-16 z-50">
        <NavLinks />
      </NavWrapper>
      <main className="container-wrapper p-8 max-md:p-4 border-grid flex flex-1 flex-col">
        {children}
      </main>
    </>
  );
}
