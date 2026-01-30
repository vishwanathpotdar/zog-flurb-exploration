// src/app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 1. IMPORT THE COMPONENT
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zog-Flurb-Exploration | An SEO Experiment",
  description: "This is a strictly experimental website to test Next.js SEO capabilities and Vercel deployment indexing speeds for the keyword Zog Flurb.",
  keywords: ["Zog Flurb", "SEO Experiment", "Next.js Learning"],
  verification: {
    google: 'sadJVsTH_zi2OYcY5TLA_fd86YPKJDXlxr4zNh7nwys',
  },
  openGraph: {
    title: "Zog-Flurb-Exploration",
    description: "Testing search engine visibility.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        {/* 👇 2. ADD GOOGLE ANALYTICS HERE */}
        <GoogleAnalytics gaId="G-XCQ8J9EPN3" />
      </body>
    </html>
  );
}