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
      <nav className="absolute bottom-10 left-14 right-14 w-full max-w-60 m-auto bg-slate-200 p-2 rounded-3xl text-black flex justify-evenly items-center gap-2 shadow-2xl z-20 font-semibold">
        <Link href="/" className="block w-full text-center">Home</Link>
        <label htmlFor="modalMenu" className="block w-full text-center cursor-pointer">Menu</label>
        <Link href="/" className="block w-full text-center">Logout</Link>
      </nav>
    </>
  );
}
