import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: string;
  duration?: number;
}

const Counter = ({ value, duration = 2 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const numericValue = parseInt(value.replace(/,/g, "")) || 0;
  const suffix = value.replace(/[0-9,]/g, "");
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent =
              Math.round(latest).toLocaleString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [numericValue, suffix, isInView, duration]);

  return <span ref={ref}>0{suffix}</span>;
};

export default Counter;
