import MobileMenu from "./MobileMenu";
import SideNav from "./SideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full border-2 border-gray-700 rounded-lg overflow-hidden">
      <header className="w-full bg-[#27272a] border-b-2 border-b-gray-700 h-12 ">
        A-Safe Digital Technical Test - Filmlibrary by Francis Bernal
      </header>
      <div className="flex flex-row h-full">
        <aside className="w-60 border-r-2 border-r-gray-700 max-sm:hidden">
          <SideNav />
        </aside>
        <MobileMenu />
        <main className="flex-1 h-[calc(100%-48px)]">{children}</main>
      </div>
    </div>
  );
}
