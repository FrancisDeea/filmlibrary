"use client";

import { MagnifyIcon } from "@/lib/icons";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searcherRef = useRef<HTMLInputElement | null>(null);

  const closeDialog = (time: number) => {
    const timer = setTimeout(() => {
      dialogRef.current?.close();
      searcherRef.current ? (searcherRef.current.value = "") : null;
    }, time);
    timerRef.current = timer;
  };

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    closeDialog(2000);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
      params.delete("page");
    }

    replace(`/?${params.toString()}`);
  }, 300);

  useEffect(() => {
    const dialog = dialogRef.current;
    document.documentElement.addEventListener("click", () => dialog?.close());

    return () =>
      document.documentElement.removeEventListener("click", () =>
        dialog?.close()
      );
  });

  return (
    <div className="flex justify-center items-center max-sm:searcher-mobile">
      <label htmlFor="searcher" className="sr-only">
        Search
      </label>

      <dialog
        ref={dialogRef}
        className="absolute inset-0 w-2/3 max-sm:w-[90%] h-20 rounded-lg z-20 backdrop:bg-black/80"
      >
        <div className="h-full ct-flex-row items-center">
          <input
            id="searcher"
            type="text"
            ref={searcherRef}
            className="peer block w-[90%] m-auto pb-2 text-center text-lg bg-transparent outline-none border-b placeholder:text-gray-500"
            placeholder={placeholder}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get("query")?.toString()}
          />
        </div>
      </dialog>

      <button className="w-full flex justify-center" onClick={() => dialogRef.current?.showModal()}>
        <MagnifyIcon style="size-6" />
      </button>
    </div>
  );
}
