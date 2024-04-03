import Link from "next/link";

export default function FloatMenu() {
  return (
    <>
      <input
        id="modalMenu"
        type="checkbox"
        className="hidden peer"
        aria-hidden
      ></input>
      <nav className="absolute bottom-10 left-14 right-14 w-full max-w-64 m-auto bg-slate-200 p-2 rounded-3xl text-black flex justify-center items-center gap-2 shadow-2xl z-20">
        <Link href="/">Back</Link>
        <Link href="/">Home</Link>
        <label htmlFor="modalMenu">Menu</label>
        <Link href="/">Logout</Link>
      </nav>
    </>
  );
}
