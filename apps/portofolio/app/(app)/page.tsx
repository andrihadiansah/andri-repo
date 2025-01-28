import { NavWrapper, NavLinks } from "@/components/main-nav";
import { buttonVariants } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@workspace/ui/components/page-header";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

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
            <Icons.gitHub className="h-18 w-18" /> GitHub
          </Link>
        </PageActions>
      </PageHeader>
      <NavWrapper className="max-md:hidden container-wrapper bottom-0 z-50 border-b border-t-0">
        <NavLinks />
      </NavWrapper>
      <main
        className="container-wrapper border-border
      px-16 max-md:px-8 py-8"
      >
        <section className="flex flex-col first-line:gap-4 border rounded-xl">
          <div className="border-b p-4">Latest Blog</div>
          <div className="p-4">
            <Link
              href={"/thoughts"}
              className={cn(buttonVariants({ variant: "outline" }), "")}
            >
              All Posts
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
