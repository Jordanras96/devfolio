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
      <LoadingWrapper initialMessages={messages} />
    </main>
  );
}
