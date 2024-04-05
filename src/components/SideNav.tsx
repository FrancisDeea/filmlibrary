import LinkButton from "@/components/LinkButton";
import LogoutButton from "./LogoutButton";

export default function SideNav() {
  return (
    <aside className="w-60 bg-dark border-r-2 border-r-medium max-sm:hidden">
      <nav className="h-full ct-flex-col justify-start gap-2 p-2">
        <LinkButton link="/" value="Home" />
        <LinkButton link="/discover" value="Discover" />
        <LinkButton link="/film-stats" value="Film Stats" />
        <LogoutButton />
      </nav>
    </aside>
  );
}
