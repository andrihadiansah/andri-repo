import { NavWrapper, NavLinks } from "@/components/main-nav";
import { Button } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@workspace/ui/components/page-header";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <PageHeader className="border-b">
        <PageHeaderHeading className="">I Built Things</PageHeaderHeading>
        <PageHeaderDescription>
          Hello 🙂, and welcome to my portfolio. I’m a Creative Developer. I
          help ambitious founders and companies in building their vision,
          brands, and products.
        </PageHeaderDescription>
        <PageActions>
          <Link href={"https://github.com/andrihadiansah"}>
            <Button variant={"secondary"} withIcon={<Icons.gitHub />}>
              GitHub
            </Button>
          </Link>
        </PageActions>
      </PageHeader>
      <NavWrapper className="max-md:hidden container-wrapper bottom-0 z-50 border-b border-t-0">
        <NavLinks />
      </NavWrapper>
      <main className="container-wrapper p-8 max-md:p-4 border-border">
        <section className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
          quam voluptas rerum necessitatibus, laborum quibusdam, nihil veniam
          laboriosam quos ad recusandae? Amet, quos? Quam numquam adipisci quae
          alias a? Rem.
        </section>
      </main>
    </>
  );
}
