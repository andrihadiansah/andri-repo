import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      className="sticky w-full
      text-center gap-4 items-center
      border-grid border-t "
    >
      <section className="flex flex-col gap-2 container-wrapper justify-center items-center p-4 h-16">
        <p className="text-sm">
          Handcrafted with ☕ by{" "}
          <Link href={"/"} className="underline">
            Andri Hadiansah
          </Link>
          .
        </p>
        <p className="text-sm">
          Layout & UI inspired by{" "}
          <Link href={"https://ui.shadcn.com/"} className="underline">
            @shadcn/ui
          </Link>
        </p>
      </section>
    </footer>
  );
}
