"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "@/lib/utils";
import { RefObject } from "react";

export default function Pagination({
  totalPages,
  category,
  scroller,
}: {
  totalPages: number;
  category?: string;
  scroller: RefObject<HTMLDivElement>;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const generatedPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleClick = () => {
    (scroller.current as HTMLDivElement).scrollTop = 0;
  };

  return (
    <div
      onClick={handleClick}
      className="basis-full flex justify-center items-center m-auto p-2 max-sm:pb-28"
    >
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex">
        {generatedPages.map((page, index) => {
          let position: "first" | "last" | "single" | "middle" | undefined;

          if (index === 0) position = "first";
          if (index === generatedPages.length - 1) position = "last";
          if (generatedPages.length === 1) position = "single";

          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  const className = `flex h-10 w-10 items-center justify-center text-sm border-t-2 border-l-2 border-b-2 last-of-type:border-r-2 border-blue-600
    ${position === "first" || position === "single" ? "rounded-l-md" : null}
    ${position === "last" || position === "single" ? "rounded-r-md" : null}
    ${isActive ? "z-10 bg-blue-600 text-white" : null}
    ${
      !isActive && position !== "middle" ? "bg-dark hover:bg-background2" : null
    }`;

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = `flex h-10 w-10 items-center justify-center rounded-md border"
    ${isDisabled ? "pointer-events-none text-gray-300" : null}
    ${!isDisabled ? "bg-dark hover:bg-background2" : null}
    ${direction === "left" ? "mr-2 md:mr-4" : "ml-2 md:ml-4"}`;

  const icon = direction === "left" ? "<--" : "-->";

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
