import { useState } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface LazyImageProps extends HTMLMotionProps<"img"> {
  containerClassName?: string;
}

const LazyImage = ({
  src,
  alt,
  className,
  containerClassName,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName || ""}`}>
      {/* Skeleton Shimmer */}
      {!isLoaded && <div className="absolute inset-0 skeleton z-10" />}

      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onLoad={() => setIsLoaded(true)}
        className={`${className || ""} ${isLoaded ? "" : "invisible"}`}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default LazyImage;
