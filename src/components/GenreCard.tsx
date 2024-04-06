/* eslint-disable @next/next/no-img-element */
import { iconDictionary } from "@/lib/icons";
import Link from "next/link";

export default function GenreCard({ id, name }: { id: number; name: string }) {
  const icon = iconDictionary[name];
  const className = `
  min-h-20 max-lg:col-span-2 text-white rounded-xl cursor-pointer transition-all hover:scale-95 overflow-hidden
    ${
      name === "Action"
        ? "col-start-1 col-end-3 row-start-1 row-end-4 bg-gradient-to-r from-blue-700 to-violet-700"
        : null
    }
    ${
      name === "Horror"
        ? "col-start-3 col-end-5 row-start-1 row-end-4 bg-gradient-to-r from-amber-700 to-pink-700"
        : null
    }
    ${
      name === "Adventure"
        ? "col-start-1 col-end-3 row-start-4 row-end-7 bg-gradient-to-r from-teal-500 to-yellow-300"
        : null
    }
    ${
      name === "Animation"
        ? "col-start-3 col-end-5 row-start-4 row-end-7 bg-gradient-to-r from-slate-500 to-slate-800"
        : null
    }
    ${name === "Crime" ? "bg-gradient-to-r from-teal-400 to-gray-800" : null}
    ${name === "Comedy" ? "bg-gradient-to-r from-indigo-400 to-cyan-400" : null}
    ${
      name === "Documentary"
        ? "bg-gradient-to-r from-violet-500 to-purple-400"
        : null
    }
    ${name === "Drama" ? "bg-gradient-to-r from-blue-600 to-violet-600" : null}
    ${
      name === "Family"
        ? "bg-gradient-to-r from-blue-400 to-yellow-500 text-black"
        : null
    }
    ${name === "Fantasy" ? "bg-gradient-to-r from-red-500 to-orange-500" : null}
    ${
      name === "History"
        ? "bg-gradient-to-r from-fuchsia-600 to-pink-600"
        : null
    }
    ${
      name === "Mystery"
        ? "bg-gradient-to-r from-purple-500 to-purple-900"
        : null
    }
    ${name === "Romance" ? "bg-gradient-to-r from-rose-700 to-pink-600" : null}
    ${
      name === "Science Fiction"
        ? "bg-gradient-to-r from-indigo-200 to-yellow-100 !text-black"
        : null
    }
    ${
      name === "Thriller"
        ? "bg-gradient-to-r from-slate-900 to-slate-700"
        : null
    }
    ${name === "War" ? "bg-gradient-to-r from-emerald-500 to-lime-600" : null}
    `;

  return (
    <Link
      key={id}
      href={`/discover/${name.toLocaleLowerCase()}`}
      className={`${className}`}
    >
      <div className="flex justify-center items-center relative h-full">
        <span className="text-xl font-semibold">{name}</span>
        <span className="absolute bottom-0 right-0 text-[40px] text-gray-200">{icon}</span>
      </div>
    </Link>
  );
}
