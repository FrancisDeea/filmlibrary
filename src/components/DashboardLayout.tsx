import MobileMenu from "./MobileMenu";
import SideNav from "./SideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full border-2 border-gray-700 rounded-lg overflow-hidden max-sm:border-none">
      <header className="p-2 w-full bg-[#27272a] border-b-2 border-b-gray-700 min-h-12 flex flex-wrap justify-center items-center gap-2">
        <p className="font-bold text-xl">Movie Library</p>
        <span className="font-normal italic text-base">
          a technical test for A-Safe Digital
        </span>
      </header>
      <div className="flex flex-row h-full">
        <aside className="w-60 border-r-2 border-r-gray-700 max-sm:hidden">
          <SideNav />
        </aside>
        <MobileMenu />
        <main className="flex-1 h-[calc(100%-48px)] py-4">{children}</main>
      </div>
    </div>
  );
}
