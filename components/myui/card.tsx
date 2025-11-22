import { ClassNameValue } from "tailwind-merge";

export const CardSubTitle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: ClassNameValue;
}) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
  );
};

export const CardParent = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: ClassNameValue;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-background p-2 border shadow-xs rounded-md w-full md:max-w-xl flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};
