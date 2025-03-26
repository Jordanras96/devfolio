import { useState, useEffect } from "react";

interface UseCarouselProps {
  itemsLength: number;
  autoplayInterval?: number;
  initialAutoplay?: boolean;
}

export const useCarousel = ({
  itemsLength,
  autoplayInterval = 3000,
  initialAutoplay = true,
}: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(initialAutoplay);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % itemsLength);
      }, autoplayInterval);
    }
    return () => clearInterval(interval);
  }, [autoplay, itemsLength, autoplayInterval]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev === 0 ? itemsLength - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % itemsLength);
  };

  const goToSlide = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    setAutoplay,
    handlePrev,
    handleNext,
    goToSlide,
  };
};
