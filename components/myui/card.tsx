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
}: {
  children?: React.ReactNode;
  className?: ClassNameValue;
}) => {
  return (
    <div
      className={`bg-background p-2 border-2 shadow-xl rounded-md w-full md:max-w-xl mx-3 flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};
