import Search from "./Search";
import BackButton from "./BackButton";
import { MenuIcon } from "@/lib/icons";
import { Suspense } from "react";

export default function FloatMenu() {
  return (
    <>
      <nav className="absolute bottom-10 left-0 right-0 w-full max-w-52 h-8 m-auto flex bg-primary rounded-3xl text-white shadow-2xl z-20">
        <BackButton />

        <label
          htmlFor="modalMenu"
          className="flex justify-center items-center w-full h-full text-center cursor-pointer flex-1"
        >
          <MenuIcon style="size-6" />
        </label>

        <Suspense>
          <Search key="mobile" placeholder="Search a movie by title..." />
        </Suspense>
      </nav>
    </>
  );
}
