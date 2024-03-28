import type { LinkButton } from "@/utils/definitions";
import Link from "next/link";

export default function LinkButton({ link, value }: LinkButton) {
  return (
    <Link
      href={link}
      className="bg-gray-800 p-2 rounded-md font-semibold hover:bg-gray-700"
    >
      {value}
    </Link>
  );
}
