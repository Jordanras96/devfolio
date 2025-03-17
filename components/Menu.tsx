// components/Menu.tsx
"use client";
import React, { useState } from "react";
import Card from "./Card";

const Menu: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <main className="grid grid-cols-1 gap-4 max-w-[15rem] mx-auto sm:grid-cols-2 sm:max-w-[30rem] lg:grid-cols-4 lg:max-w-[60rem]">
      <Card
        activeColor="#e0f2fe"
        colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]}
        gap={10}
        speed={25}
        onClick={() => handleCardClick("code")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"></path>
        </svg>
        <button>Code</button>
      </Card>
      {activeCard === "code" && (
        <div className="p-4 col-span-full bg-surface-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      )}
      {/* Ajoutez d'autres cartes ici */}
    </main>
  );
};

export default Menu;
