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



export const metadata: Metadata = {
  title: "BlitzCharts",
  description: "Beautiful Animated Charts for shadcn/ui ecosystem",
    icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "BlitzCharts",
    description: "Beautiful Animated Charts for shadcn/ui ecosystem",
    url: "https://blitz-charts.vercel.app", // replace with your actual domain
    siteName: "BlitzCharts",
    images: [
      {
        url: "/og-image.png", // <-- replace with the image you uploaded
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
    images: ["/og-image.png"],
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
