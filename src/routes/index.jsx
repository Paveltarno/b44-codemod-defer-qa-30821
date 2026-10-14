import { createFileRoute } from "@tanstack/react-router";
import { getServerInfo } from "@/lib/server-fns";

export const Route = createFileRoute("/")({
  loader: () => getServerInfo(),
  head: () => ({ meta: [{ title: "Base44 App" }] }),
  component: HomePage,
});

function HomePage() {
  const { renderedAt } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-5xl space-y-4 px-4 py-8">
      <h1 className="text-3xl font-semibold tracking-tight">Your app starts here</h1>
      <p className="text-muted-foreground">
        Server-rendered at <time dateTime={renderedAt}>{renderedAt}</time>.
      </p>
      <footer className="border-t pt-4 text-sm text-muted-foreground">Footer from PR B</footer>
    </main>
  );
}