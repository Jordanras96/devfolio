// app/page.tsx
import { getMessages } from "next-intl/server";
import { LoadingWrapper } from "@/components/LoadingWrapper";
// import Menu from "@/components/Menu";
// import Card from "@/components/Card";

export default async function Home() {
  const messages = await getMessages();

  return (
    <main
      // className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4"
      className="relative bg-background min-h-screen overflow-x-hidden"
    >
      {/* <Card
        activeColor="#e0f2fe"
        gap={10}
        speed={25}
        colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V98H38V56A2,2,0,0,1,40,54ZM38,200V110H98v92H40A2,2,0,0,1,38,200Zm178,2H110V110H218v90A2,2,0,0,1,216,202Z"></path>
        </svg>
        <button>Layout</button>
      </Card>
      <Card
        activeColor="#e0f2fe"
        gap={10}
        speed={25}
        colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V98H38V56A2,2,0,0,1,40,54ZM38,200V110H98v92H40A2,2,0,0,1,38,200Zm178,2H110V110H218v90A2,2,0,0,1,216,202Z"></path>
        </svg>
        <button>Layout</button>
      </Card>
      <Card
        activeColor="#e0f2fe"
        gap={10}
        speed={25}
        colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V98H38V56A2,2,0,0,1,40,54ZM38,200V110H98v92H40A2,2,0,0,1,38,200Zm178,2H110V110H218v90A2,2,0,0,1,216,202Z"></path>
        </svg>
        <button>Layout</button>
      </Card>
      <Card
        activeColor="#e0f2fe"
        gap={10}
        speed={25}
        colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V98H38V56A2,2,0,0,1,40,54ZM38,200V110H98v92H40A2,2,0,0,1,38,200Zm178,2H110V110H218v90A2,2,0,0,1,216,202Z"></path>
        </svg>
        <button>Layout</button>
      </Card> */}
      <LoadingWrapper initialMessages={messages} />
    </main>
  );
}
