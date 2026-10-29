
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://absal-one.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Absal Fatima | Full-Stack Developer & Web Designer",
    template: "%s | Absal Fatima",
  },

  description:
    "Explore Absal Fatima's developer portfolio featuring modern websites, web applications, responsive UI, business dashboards, and digital experiences.",

  applicationName: "Absal Fatima Portfolio",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  openGraph: {
    title: "Absal Fatima | Full-Stack Developer & Web Designer",
    description:
      "Explore web development projects, responsive websites, business dashboards, and digital solutions built by Absal Fatima.",
    url: siteUrl,
    siteName: "Absal Fatima Portfolio",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Absal Fatima | Full-Stack Developer & Web Designer",
    description:
      "Explore web development projects, responsive websites, and digital solutions built by Absal Fatima.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
