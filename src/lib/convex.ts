import { ConvexHttpClient } from "convex/browser";

// Initialize Convex client with your deployment URL
// Make sure to set VITE_CONVEX_URL in your .env file
const convexUrl = import.meta.env.VITE_CONVEX_URL || "";

if (!convexUrl) {
  console.warn("VITE_CONVEX_URL is not set. Please add it to your .env file");
}

export const convex = new ConvexHttpClient(convexUrl);
