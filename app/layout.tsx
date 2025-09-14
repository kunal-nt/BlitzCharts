import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "BlitzCharts",
  description: "Beautiful Animated Charts for shadcn/ui ecosystem",
  openGraph: {
    title: "BlitzCharts",
    description: "Beautiful Animated Charts for shadcn/ui ecosystem",
    url: "https://blitz-charts.vercel.app",
    siteName: "BlitzCharts",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "BlitzCharts Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlitzCharts",
    description: "Beautiful Animated Charts for shadcn/ui ecosystem",
    images: ['https://blitz-charts.vercel.app/og-image.png'],
    creator: "@partharora9128",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="amethyst-light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiasedW
          
          flex items-center justify-center bg-[var(--background)]`}
      >
        <div className="w-full">
        {children}
        </div>
      </body>
    </html>
  );
}
