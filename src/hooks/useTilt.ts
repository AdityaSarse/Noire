import { useState, useCallback, RefObject } from "react";

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export const useTilt = (ref: RefObject<HTMLElement>, intensity: number = 10) => {
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (mouseY / (rect.height / 2)) * -intensity;
      const rotateY = (mouseX / (rect.width / 2)) * intensity;

      setTilt({ rotateX, rotateY, scale: 1.02 });
    },
    [ref, intensity]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  return { tilt, handleMouseMove, handleMouseLeave };
};

export default useTilt;