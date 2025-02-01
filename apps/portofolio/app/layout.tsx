import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { fontSans, fontMono } from "@/lib/fonts";
import type { Metadata } from "next";
import { META_THEME_COLORS, siteConfig } from "@/config/site";
import { Toaster } from "@workspace/ui/components/toaster";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Andri",
    "Andri Hadiansah",
    "Portofolio Andri Hadiansah",
    "Next.js",
    "Turborepo",
    "shadcn/ui",
    "tailwindcss",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={META_THEME_COLORS.dark} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                  }
                } catch (_) {}
              `,
          }}
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} min-h-screen font-mono antialiased `}
      >
        <Providers>
          <div className="relative flex flex-col flex-1">{children}</div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
