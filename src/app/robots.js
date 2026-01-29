// src/app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://zog-flurb-exploration.vercel.app/sitemap.xml',
  };
}