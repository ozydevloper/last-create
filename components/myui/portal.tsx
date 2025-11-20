import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    function setMount() {
      setMounted(true);
    }
    setMount();
  }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
};
