import { NavWrapper, NavLinks } from "@/components/main-nav";
import { buttonVariants } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";
import { Separator } from "@workspace/ui/components/separator";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@workspace/ui/components/page-header";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

import { TimelineStory } from "@/components/time-story";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";

export default function HomePage() {
  return (
    <>
      <PageHeader className="">
        <PageHeaderHeading className="">I Built Things</PageHeaderHeading>
        <PageHeaderDescription>
          Hello 🙂, and welcome to my portfolio. I’m a Creative Developer. I
          help ambitious founders and companies in building their vision,
          brands, and products.
        </PageHeaderDescription>
        <PageActions>
          <Link
            href={"https://github.com/andrihadiansah"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex text-center"
            )}
          >
            <Icons.gitHub className="h-18 w-18" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
      <NavWrapper className="max-md:hidden container-wrapper top-16 z-50 border-b border-t-0">
        <NavLinks />
      </NavWrapper>
      <main
        className="container-wrapper border-border
      px-16 max-md:px-8 py-8 flex flex-col gap-8"
      >
        <section className="gap-8 grid grid-cols-[60%_auto] max-lg:grid-cols-1 mt-4">
          <div className="">
            <TimelineStory className="" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold border-b pb-2">Latest Blog</h2>
            <div className="flex flex-col border p-2 ">
              <div className="flex justify-between ">
                <div className="text-muted-foreground text-xs">
                  January, 1, 1900
                </div>
                <div className="flex gap-1">
                  <Badge variant={"secondary"}>tag</Badge>
                  <Badge variant={"secondary"}>tag</Badge>
                </div>
              </div>
              <h2 className="text-xl">Title</h2>
            </div>
            <div className="flex flex-col border p-2 gap-1">
              <div className="flex justify-between ">
                <div className="text-muted-foreground">January, 1, 1900</div>
                <div className="flex gap-1">
                  <Badge variant={"secondary"}>tag</Badge>
                  <Badge variant={"secondary"}>tag</Badge>
                </div>
              </div>
              <h2 className="text-xl">Title</h2>
            </div>
            <div className="flex flex-col border p-2 gap-2">
              <div className="flex justify-between ">
                <div className="text-muted-foreground">January, 1, 1900</div>
                <div className="flex gap-1">
                  <Badge variant={"secondary"}>tag</Badge>
                  <Badge variant={"secondary"}>tag</Badge>
                </div>
              </div>
              <h2 className="text-xl">Title</h2>
            </div>
            <div className="flex flex-col border p-2 gap-2">
              <div className="flex justify-between ">
                <div className="text-muted-foreground">December, 1, 1900</div>
                <div className="flex gap-1 items-center">
                  <Badge variant={"secondary"}>tag</Badge>
                  <Badge variant={"secondary"}>tag</Badge>
                  <Badge variant={"secondary"}>tag</Badge>
                  <Badge variant={"secondary"}>tag</Badge>
                  <Badge variant={"secondary"}>tag</Badge>
                </div>
              </div>
              <h2 className="text-xl">Title</h2>
            </div>
            <Link
              href={"/thoughts"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" })
              )}
            >
              All Posts
            </Link>
          </div>
        </section>
        <Separator />
        <section className="gap-4 grid grid-cols-2 ">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold">Experiments</h2>
          </div>
          <div className="max-lg:col-span-2 border rounded-lg p-4">
            <div className="aspect-video"></div>
          </div>
          <div className="max-lg:col-span-2 border rounded-lg p-4">
            <div className="aspect-video"></div>
          </div>
        </section>
        <Separator />
        <section className="flex flex-col justify-center items-center gap-4 ">
          <h3 className="text-xl">Find me on</h3>
          <div className="flex gap-2">
            <Icons.gitHub className="h-8" />
            <Linkedin size={36} />
            <Instagram size={36} />
            <Twitter size={36} />
          </div>
        </section>
      </main>
    </>
  );
}
