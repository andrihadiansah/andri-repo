import Link from "next/link";
import { Icons } from "@workspace/ui/components/icons";
export default function SiteHeader() {
  return (
    <header className="border-grid border-b sticky top-0 z-50 w-full ">
      <nav
        className="container-wrapper h-16
      flex items-center justify-between
      px-8 max-md:px-4 backdrop-blur-md
      gap-2"
      >
        <Link href={"/"} className="flex items-center gap-4">
          <Icons.gitHub className="h-8 w-8" />
          <span>Andri Hadiansah</span>
        </Link>
      </nav>
    </header>
  );
}
