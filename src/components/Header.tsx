import { Suspense } from "react";
import Search from "./Search";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="p-4 w-full bg-background2 border-header h-18 ct-flex-col items-center">
      <Logo />
      {/* <Suspense>
        <Search placeholder="Search a title movie..." />
      </Suspense> */}
    </header>
  );
}
