import Header from "./Header";
import SideNav from "./SideNav";
import MobileMenu from "./MobileMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full border-2 border-border/70 rounded-lg overflow-hidden max-sm:border-none">
      <Header />
      <div className="flex flex-row h-full">
        <SideNav />
        <MobileMenu />
        <main className="bg-background2 flex-1 h-[calc(100%-56px)] max-sm:custom-layout sm:p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
