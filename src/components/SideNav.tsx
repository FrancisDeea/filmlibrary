import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import LogoutButton from "./LogoutButton";

export default function SideNav() {
  return (
    <nav className="h-full flex flex-col gap-2 p-2">
      <LinkButton link="/" value="Home" />
      <LinkButton link="/discover" value="Discover" />
      <LinkButton link="/film-stats" value="Film Stats" />
      <LogoutButton />
    </nav>
  );
}
