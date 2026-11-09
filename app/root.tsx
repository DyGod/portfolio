import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { themeInitScript } from "./components/ThemeToggle";
import "./fonts.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-800.css";
import openSansUrl from "@fontsource-variable/open-sans/files/open-sans-latin-wght-normal.woff2?url";
import poppins700Url from "@fontsource/poppins/files/poppins-latin-700-normal.woff2?url";
import poppins800Url from "@fontsource/poppins/files/poppins-latin-800-normal.woff2?url";
import "./app.css";

// Self-hosted fonts (no render-blocking third-party stylesheet). Preload the faces used above the fold.
const preloadFont = (href: string) => ({ rel: "preload", href, as: "font", type: "font/woff2", crossOrigin: "anonymous" as const });

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
  preloadFont(openSansUrl),
  preloadFont(poppins700Url),
  preloadFont(poppins800Url),
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: themeInitScript may set data-theme before React hydrates
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f3a5f" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4">{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="py-20">
      <h1 className="font-display text-4xl font-extrabold">{message}</h1>
      <p className="mt-3 text-muted">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  );
}
