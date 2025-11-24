import { Badge } from "@/components/myui/badge";
import { CardParent } from "@/components/myui/card";

export default function Page() {
  return (
    <div className="w-full max-w-xl flex items-center justify-center h-dvh overflow-y-scroll flex-col gap-y-2">
      <Badge color="red">../admin</Badge>
      <CardParent></CardParent>
    </div>
  );
}
