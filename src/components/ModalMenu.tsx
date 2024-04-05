"use client";

import LinkButton from "./LinkButton";

export default function ModalMenu() {

  const handleClick = () => {
    const modalInput = document.getElementById("modalMenu") as HTMLInputElement;
    modalInput.checked = false;
  };

  return (
    <>
      <input
        id="modalMenu"
        type="checkbox"
        className="hidden peer"
        aria-hidden
      ></input>

      <aside
        onClick={handleClick}
        className="hidden absolute inset-0 bg-slate-950/90 z-30 peer-checked:block animate-fade animate-duration-100"
      >
        <nav className="h-full ct-flex-col items-center text-xl text-white relative">
          <label className="absolute top-14 right-14">Close</label>
          <LinkButton link="/" value="Home" />
          <LinkButton link="/discover" value="Discover" />
          <LinkButton link="/film-stats" value="Film Stats" />
          <LinkButton link="/" value="Logout" />
        </nav>
      </aside>
    </>
  );
}
