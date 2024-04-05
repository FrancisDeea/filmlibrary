import type { LinkButton } from "@/lib/definitions";
import Link from "next/link";

export default function LinkButton({ link, value }: LinkButton) {
  return (
    <Link
      href={link}
      className="bg-background1 sm:hover:bg-background2 p-2 rounded-md font-semibold max-sm:bg-transparent"
    >
      {value}
    </Link>
  );
}
