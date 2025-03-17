"use client";
import React, { useRef, useEffect, useState } from "react";
import PixelCanvas from "./PixelCanvas";
import "./Card.css";

interface CardProps {
  activeColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  gap?: number;
  speed?: number;
  colors?: string[];
}

const Card: React.FC<CardProps> = ({
  activeColor,
  children,
  onClick,
  gap = 5,
  speed = 35,
  colors = ["#f8fafc", "#f1f5f9", "#cbd5e1"],
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (cardRef.current && activeColor) {
      cardRef.current.style.setProperty("--active-color", activeColor);
    }
  }, [activeColor]);

  return (
    <div
      ref={cardRef}
      className="card"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PixelCanvas
        gap={gap}
        speed={speed}
        colors={colors}
        isHovered={isHovered}
      />
      {children}
    </div>
  );
};

export default Card;
