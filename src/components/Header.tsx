import { Suspense } from "react";
import Search from "./Search";
import Logo from "./Logo";
import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <header className="p-4 w-full bg-secondary/20 border-header h-18 ct-flex-row justify-between">
      <ThemeSelector />
      <Logo />
      <Suspense>
        <Search placeholder="Search a title movie..." />
      </Suspense>
    </header>
  );
}
