import { MobileNav } from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { buttonVariants } from "@workspace/ui/components/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@workspace/ui/components/page-header";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="border-grid flex flex-1 flex-col">
      <SiteHeader />
      <PageHeader className="">
        <PageHeaderHeading>Opps, Page Not Found.</PageHeaderHeading>
        <PageHeaderDescription>Maybe wrong Url wkwkw</PageHeaderDescription>
        <PageActions>
          <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Back to Home
          </Link>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper flex items-center justify-center p-12">
        Error 404: Page Not Found
      </div>
      <MobileNav />
      <SiteFooter />
    </main>
  );
}
