import LinkButton from "./LinkButton";

export default function ModalMenu() {
  return (
    <aside className="hidden absolute inset-0 bg-slate-950/85 z-30 peer-checked:block">
      <nav className="h-full flex flex-col gap-2 justify-center items-center text-xl relative">
        <label htmlFor="modalMenu" className="absolute top-14 right-14">Close</label>
        <LinkButton link="/" value="Home" />
        <LinkButton link="/discover" value="Discover" />
        <LinkButton link="/film-stats" value="Film Stats" />
        <LinkButton link="/" value="Logout" />
      </nav>
    </aside>
  );
}
