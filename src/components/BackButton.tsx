"use client";

import { BackIcon } from "@/lib/icons";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="w-full h-full text-center flex-1 justify-self-cente flex justify-center items-center"
    >
      <BackIcon style="size-6" />
    </button>
  );
}
