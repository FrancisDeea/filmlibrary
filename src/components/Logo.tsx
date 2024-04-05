import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="ct-flex-row flex-wrap justify-center gap-2 h-full">
        <p className="font-bold text-xl">Movie Library</p>
        <span className="font-normal italic text-sm max-sm:hidden">
          a technical test for A-Safe Digital
        </span>
      </div>
    </Link>
  );
}
