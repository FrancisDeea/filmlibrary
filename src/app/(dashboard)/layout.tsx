import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import "@/components/DashboardLayout";
import DashboardLayout from "@/components/DashboardLayout";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Library - Francis x A-Safe Digital",
  description:
    "A movie library project powered by NextJS. Developer by Francisco Javier Bernal for A-SAFE DIGITAL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
