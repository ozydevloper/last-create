import { ClassNameValue } from "tailwind-merge";

export const Badge = ({
  children,
  color,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  color?: string;
  className?: ClassNameValue;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-1 border-2 rounded-md text-xs font-bold ${color == "blue" ? "bg-blue-100 text-blue-500 border-blue-200" : color == "red" ? "bg-red-100 text-red-500 border-red-200" : color == "green" ? "bg-green-100 text-green-500 border-green-200" : color == "default" && "bg-neutral-500 text-neutral-100 border-neutral-400"} ${className} transition-all ease-in-out duration-200 active:scale-98`}
    >
      {children}
    </div>
  );
};
