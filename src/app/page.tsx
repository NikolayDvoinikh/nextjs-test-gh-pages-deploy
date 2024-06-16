import Link from "next/link";

export default function Home() {
  const className =
    "inline-flex gap-1 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset mx-1";
  return (
    <main className="flex justify-center items-center gap-5 w-screen h-screen flex-col p-5 text-dark-tremor-content-strong">
      <h1 className="text-3xl font-bold">
        Welcome to my app that track visitors of this page!
      </h1>
      <div>
        <span className={className}>Next.js 14</span>
        <span className={className}>React-tremor</span>
        <span className={className}>Upstash/Redis</span>
        <span className={className}>TypeScript</span>
        <span className={className}>TailwindCSS</span>
      </div>
      <Link href="/analytics" className="bg-blue-500 p-2 text-center rounded">
        Go to Dashboard
      </Link>
    </main>
  );
}