// src/app/page.jsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <article className="prose lg:prose-xl text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Zog-Flurb-Exploration</h1>
        <p className="text-lg mb-4">
          We are conducting a live test to see how fast a Vercel deployment appears on Google.
          The term <strong className="text-blue-500">Zog-Flurb</strong> is our unique identifier.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why we are doing this</h2>
        <p className="text-lg">
          Understanding the pipeline from <em>git push</em> to <em>Google Index</em> is crucial for modern web development.
        </p>
      </article>
    </main>
  );
}