import type { Metadata } from "next";
import "./globals.css";
import GlassNavbar from "@/components/glassNavbar";

export const metadata: Metadata = {
  title: "KilauEmasStudio",
  description: "Merajut Identitas, Menyala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        {/* <Navbar /> */}
        <GlassNavbar />
        {children}
      </body>
    </html>
  );
}
