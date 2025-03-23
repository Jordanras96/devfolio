// app/page.tsx
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { getMessages } from "next-intl/server";
// import Menu from "@/components/Menu";
// import Card from "@/components/Card";

// Charger dynamiquement le LoadingWrapper pour réduire le bundle initial
const DynamicLoadingWrapper = dynamic(
  () => import("@/components/LoadingWrapper").then((mod) => mod.LoadingWrapper),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        Chargement...
      </div>
    ),
  }
);

export default async function Home() {
  const messages = await getMessages();

  return (
    <main
      // className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4"
      className="relative bg-background min-h-screen overflow-x-hidden"
    >
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Chargement...
          </div>
        }
      >
        <DynamicLoadingWrapper initialMessages={messages} />
      </Suspense>
    </main>
  );
}
