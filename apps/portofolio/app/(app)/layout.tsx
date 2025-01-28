import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { NavWrapper, NavLinks } from "@/components/main-nav";
interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="border-grid flex flex-1 flex-col">
      <SiteHeader />

      <main className="min-h-[calc(100svh-180px)]">{children}</main>
      <NavWrapper className="md:hidden bottom-0 z-50 border-b-0 border-t">
        <NavLinks />
      </NavWrapper>
      <SiteFooter />
    </div>
  );
}
