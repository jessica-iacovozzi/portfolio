import "./Image.css";
import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Image({ name }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1.25, delay: 1.5 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      <img src={name} alt={name} onLoad={() => setIsLoaded(true)} />
    </motion.div>
  );
}
