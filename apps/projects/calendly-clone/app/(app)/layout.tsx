import { MobileNav } from "@/components/main-nav";
import SiteHeader from "@/components/site-header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="border-grid flex flex-1 flex-col">
      <SiteHeader />
      <main className="min-h-[calc(100vh-72px)] container-wrapper flex flex-col flex-1">
        {children}
      </main>
      <MobileNav />
    </div>
  );
}
