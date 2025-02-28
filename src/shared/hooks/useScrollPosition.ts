import { useEffect, useState } from "react";

export const useScrollPosition = (ref: React.RefObject<HTMLElement | null>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let animationFrameId: number;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const newIsScrolled = element.scrollTop > 10;
        if (newIsScrolled !== isScrolled) {
          setIsScrolled(newIsScrolled);
        }
      });
    };

    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [ref, isScrolled]);

  return isScrolled;
};
