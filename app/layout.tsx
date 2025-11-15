import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EDX - Digital Marketing & Freelancing Services",
  description: "Transform your brand with cutting-edge digital marketing strategies and expert freelancing services. SEO, ads, branding, web development, and design.",
  keywords: "digital marketing, SEO, freelancing, web development, branding, content creation",
  authors: [{ name: "EDX" }],
  openGraph: {
    title: "EDX - Digital Marketing & Freelancing Services",
    description: "Transform your brand with cutting-edge digital marketing strategies and expert freelancing services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

