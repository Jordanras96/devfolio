import { useAnimation, AnimationDefinition } from "framer-motion";
import { useEffect } from "react";

interface ScrollAnimationConfig {
  initial?: AnimationDefinition;
  animate?: AnimationDefinition;
  viewport?: object;
  transition?: object;
}

export const useScrollAnimation = (config: ScrollAnimationConfig = {}) => {
  const controls = useAnimation();

  const defaultConfig = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const finalConfig = { ...defaultConfig, ...config };

  useEffect(() => {
    controls.start(finalConfig.animate);
  }, [controls]);

  return {
    controls,
    ...finalConfig,
  };
};
