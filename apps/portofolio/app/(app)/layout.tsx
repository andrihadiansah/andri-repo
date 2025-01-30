import { MobileNav } from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="border-grid flex flex-1 flex-col">
      <SiteHeader />

      <main className="min-h-[calc(100svh-132px)] flex flex-col flex-1">
        {children}
      </main>
      <MobileNav />
      <SiteFooter />
    </div>
  );
}
