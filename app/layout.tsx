import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Absal Fatima | Full Stack Developer",
  description:
    "Portfolio of Absal Fatima — Full Stack Developer creating modern websites, web applications, business dashboards, and digital experiences.",
  applicationName: "Absal Fatima Portfolio",
  openGraph: {
    title: "Absal Fatima | Full Stack Developer",
    description:
      "Explore web applications, responsive websites, dashboards, and digital solutions built by Absal Fatima.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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