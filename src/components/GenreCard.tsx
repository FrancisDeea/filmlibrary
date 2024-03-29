import Link from "next/link";

export default function GenreCard({ id, name }: { id: number; name: string }) {
  const className = `
    rounded-xl p-4 bg-amber-600
    ${name === "Action" ? "col-start-1 col-end-3 row-start-1 row-end-4" : null}
    ${name === "Horror" ? "col-start-3 col-end-5 row-start-1 row-end-4" : null}
    ${
      name === "Adventure"
        ? "col-start-1 col-end-3 row-start-4 row-end-7"
        : null
    }
    ${
      name === "Animation"
        ? "col-start-3 col-end-5 row-start-4 row-end-7"
        : null
    }
    `;

  return (
    <Link key={id} href={`/${name.toLocaleLowerCase()}`} className={`${className}`}>
      <div>{name}</div>
    </Link>
  );
}
