import { handleLogOut } from "@/lib/actions";

export default function LogoutButton() {
  // LogoutButton is wrapped in a form that is able to send a server action to hadle authentication
  return (
    <form
      className=""
      action={handleLogOut}
    >
      <button className="bg-background1 sm:hover:bg-secondary/40 p-2 w-full text-left rounded-md font-semibold max-sm:bg-transparent">
        Sign Out
      </button>
    </form>
  );
}
