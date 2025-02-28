import { useEffect, useState } from "react";

export const useScrollPosition = (ref: React.RefObject<HTMLElement | null>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleScroll = () => {
      setIsScrolled(element.scrollTop > 10);
    };

    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isScrolled;
};
