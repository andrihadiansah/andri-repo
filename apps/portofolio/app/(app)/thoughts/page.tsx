// apps/portofolio/app/(app)/blog/page.tsx

import type { Metadata } from "next";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@workspace/ui/components/page-header";
import React from "react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { Palette } from "lucide-react";
import { BlogPostList } from "@/components/blog-posts";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Essays, learning, and other miscellaneous goodies.",
};

export default function BlogPage() {
  return (
    <div className="">
      <PageHeader className="">
        <PageHeaderHeading>{`${metadata.title}`}</PageHeaderHeading>
        <PageHeaderDescription>{`${metadata.description}`}</PageHeaderDescription>
        <PageActions className="flex gap-2">
          <Link href={"/"}>
            <Button variant={"outline"} withIcon={<Palette />}>
              Artwork
            </Button>
          </Link>
        </PageActions>
      </PageHeader>
      <section
        className="container-wrapper flex flex-col
        px-16 max-md:px-8 py-4  "
      >
        <BlogPostList className="" />
      </section>
    </div>
  );
}
