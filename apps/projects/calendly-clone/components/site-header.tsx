import Link from "next/link";
import { DesktopNav } from "./main-nav";
import { Calendar } from "lucide-react";
export default function SiteHeader() {
  return (
    <header className="border-grid border-b sticky top-0 z-50 w-full ">
      <nav
        className="container-wrapper h-16
      flex items-center justify-between
      px-8 max-md:px-4 backdrop-blur-md
      gap-2"
      >
        <Link href={"/"} className="flex items-center gap-2">
          <Calendar className="h-8 w-8" />
          <span className="text-2xl">CalAndri</span>
        </Link>
        <DesktopNav />
        <div className="">sign in</div>
      </nav>
    </header>
  );
}
