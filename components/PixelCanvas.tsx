"use client";
import React, { useEffect, useRef, useState } from "react";

class Pixel {
  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
    private x: number,
    private y: number,
    private color: string,
    private speed: number,
    private delay: number
  ) {}

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, 2, 2);
  }

  update() {
    this.x += Math.random() * this.speed - this.speed / 2;
    this.y += Math.random() * this.speed - this.speed / 2;
    this.draw();
  }
}

const PixelCanvas: React.FC<{
  gap?: number;
  speed?: number;
  colors?: string[];
  isHovered: boolean;
}> = ({
  gap = 5,
  speed = 35,
  colors = ["#f8fafc", "#f1f5f9", "#cbd5e1"],
  isHovered,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pixels, setPixels] = useState<Pixel[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const newPixels: Pixel[] = [];

    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.sqrt((x - width / 2) ** 2 + (y - height / 2) ** 2);

        newPixels.push(new Pixel(canvas, ctx, x, y, color, speed, delay));
      }
    }

    setPixels(newPixels);
  }, [gap, speed, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHovered) {
        pixels.forEach((pixel) => pixel.update());
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, pixels]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default PixelCanvas;
