// src/app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zog-Flurb-Exploration | An SEO Experiment",
  description: "This is a strictly experimental website to test Next.js SEO capabilities and Vercel deployment indexing speeds for the keyword Zog Flurb.",
  keywords: ["Zog Flurb", "SEO Experiment", "Next.js Learning"],
  // 👇 ADD THIS SECTION EXACTLY AS SHOWN
  verification: {
    google: 'sadJVsTH_zi2OYcY5TLA_fd86YPKJDXlxr4zNh7nwys',
  },
  // 👆 END OF NEW SECTION
  openGraph: {
    title: "Zog-Flurb-Exploration",
    description: "Testing search engine visibility.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}