import { User } from "@/lib/generated/prisma/client";

export const MyTabel = ({
  data,
}: {
  data: User[] | undefined | null | string;
}) => {
  console.log(data);
};
