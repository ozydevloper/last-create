export const Input = ({
  ...props
}: React.ComponentPropsWithoutRef<"input">) => {
  return <input {...props} className={`p-2`} type="text" />;
};
