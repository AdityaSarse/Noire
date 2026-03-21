import { useEffect, useState, RefObject } from "react";

export const useParallax = (ref: RefObject<HTMLElement>, speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      const parallaxOffset = scrolled * speed * 0.1;

      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, speed]);

  return offset;
};

export default useParallax;