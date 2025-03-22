"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/Loader.module.css";

export function LightLoader() {
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wordRef.current) {
      const text = wordRef.current.textContent || "";
      wordRef.current.innerHTML = text
        .split("")
        .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      const letters = wordRef.current.querySelectorAll("span");
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add(styles.done);
        }, 100 * index);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div ref={wordRef} className={styles.word}>
        Bienvenue sur mon Portfolio
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}
