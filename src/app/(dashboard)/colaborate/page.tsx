import { auth } from "@/auth/auth";
import RealtimeChat from "@/components/RealtimeChat";

export default async function Page() {
  const session = await auth();

  return (
    <section className="h-full w-full relative max-sm:!h-[85%]">
      <h1 className="mb-4" >Real-Time Chat about Movies Contributions</h1>
      <RealtimeChat session={session} />
    </section>
  );
}
