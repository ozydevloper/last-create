import { Menu, X } from "lucide-react";
import { Badge } from "../badge";
import { TitleApp } from "../title.app";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

const ButtonNav = ({
  children,
  redirectUrl,
}: {
  children: React.ReactNode;
  redirectUrl: string;
}) => {
  return (
    <div
      onClick={() => redirect(redirectUrl)}
      className="w-full p-1 text-md border-y active:bg-primary-foreground  transition-all ease-in-out duration-200 active:text-primary"
    >
      {children}
    </div>
  );
};

export const MenuBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [clientSession, setClientSession] = useState<null | Session>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setClientSession(session);
      console.log(session);
    };
    fetchSession();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full my-1 text-center gap-y-1 max-w-xl">
      <div className="flex items-center justify-between w-full">
        <TitleApp className="text-sm" />
        <Badge
          color={showMenu ? "red" : "blue"}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X size={24} /> : <Menu size={22} />}
        </Badge>
      </div>
      <div
        className={`${showMenu ? "block" : "hidden"} w-full py-2 rounded-md flex flex-col`}
      >
        {!!clientSession && (
          <ButtonNav redirectUrl="/profile">Profile</ButtonNav>
        )}
        {!!clientSession && clientSession.user.role == "ADMIN" && (
          <ButtonNav redirectUrl="/admin">Admin</ButtonNav>
        )}
        {!!clientSession ? (
          <ButtonNav redirectUrl="/logout">Logout</ButtonNav>
        ) : (
          <ButtonNav redirectUrl="/login">Login</ButtonNav>
        )}
      </div>
    </div>
  );
};
