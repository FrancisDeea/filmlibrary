import { SpinnerIcon } from "@/lib/icons";

export default function Loading() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <SpinnerIcon style="w-14 h-14" />
    </div>
  );
}
