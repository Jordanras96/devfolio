// components/3d/Loader.tsx
"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/Loader.module.css";

export function Loader() {
  const wordRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<Ticker | null>(null);

  useEffect(() => {
    if (wordRef.current && !tickerRef.current) {
      tickerRef.current = new Ticker(wordRef.current);
      tickerRef.current.reset();
    }

    return () => {
      tickerRef.current = null; // Nettoyage
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={wordRef} className={styles.word}>
        Hi&nbsp;there!
      </div>

      <div className={styles.overlay}></div>
    </div>
  );
}

// Classe Ticker avec TypeScript
class Ticker {
  private done: boolean = false;
  private cycleCount: number = 5;
  private cycleCurrent: number = 0;
  private chars: string[] =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;:'\"<>?,./`~".split(
      ""
    );
  private charsCount: number = this.chars.length;
  private letters: NodeListOf<HTMLSpanElement>;
  private letterCount: number;
  private letterCurrent: number = 0;

  constructor(element: HTMLElement) {
    this.lettering(element);
    this.letters = element.querySelectorAll("span");
    this.letterCount = this.letters.length;

    this.letters.forEach((letter) => {
      letter.dataset.orig = letter.textContent || "";
      letter.textContent = "-";
    });
  }

  // Simuler la méthode lettering() de jQuery
  private lettering(element: HTMLElement): void {
    const text = element.innerHTML.replace(/&nbsp;/g, " "); // Convertir &nbsp; en espaces
    element.innerHTML = text
      .split("")
      .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
      .join("");
  }

  private getChar(): string {
    return this.chars[Math.floor(Math.random() * this.charsCount)];
  }

  public reset(): void {
    this.done = false;
    this.cycleCurrent = 0;
    this.letterCurrent = 0;
    this.letters.forEach((letter) => {
      letter.textContent = letter.dataset.orig || "";
      letter.classList.remove("done");
    });
    this.loop();
  }

  private loop(): void {
    this.letters.forEach((letter, index) => {
      if (index >= this.letterCurrent && letter.textContent !== " ") {
        letter.textContent = this.getChar();
        letter.style.opacity = Math.random().toString();
      }
    });

    if (this.cycleCurrent < this.cycleCount) {
      this.cycleCurrent++;
    } else if (this.letterCurrent < this.letterCount) {
      const currLetter = this.letters[this.letterCurrent];
      this.cycleCurrent = 0;
      currLetter.textContent = currLetter.dataset.orig || "";
      currLetter.style.opacity = "1";
      currLetter.classList.add("done");
      this.letterCurrent++;
    } else {
      this.done = true;
      const container = this.letters[0].parentElement;
      if (container) {
        container.innerHTML +=
          '<div class="flex flex-row gap-2 justify-center items-center"><div class="w-4 h-4 rounded-full bg-red-900/90 animate-bounce"></div><div class="w-4 h-4 rounded-full bg-green-900/90 animate-bounce [animation-delay:-.3s]"></div><div class="w-4 h-4 rounded-full bg-blue-900/90 animate-bounce [animation-delay:-.5s]"></div></div>';
      }
    }

    if (!this.done) {
      requestAnimationFrame(() => this.loop());
    } else {
      setTimeout(() => this.reset(), 750);
    }
  }
}
