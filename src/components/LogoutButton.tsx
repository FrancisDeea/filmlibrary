import { signOut } from "@/auth";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="bg-gray-800 p-2 w-full text-left rounded-md font-semibold sm:hover:bg-gray-700 max-sm:bg-transparent">
        <div className="">Sign Out</div>
      </button>
    </form>
  );
}
