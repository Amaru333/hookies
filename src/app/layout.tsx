import type { Metadata } from "next";
import "./globals.css";
import HomeWrapper from "@/wrapper/HomeWrapper";
import Header from "@/common/Header";
import { Toaster } from "sonner";
import Footer from "@/common/Footer";

export const metadata: Metadata = {
  title: "Hookies - React Hooks Library",
  description: "Hookies is a collection of React hooks that you can use in your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HomeWrapper>
          <div className="flex flex-col min-h-screen transition-all">
            <div className="sticky top-0 z-50 py-4 border-b bg-background">
              <div className="max-w-7xl mx-auto">
                <Header />
              </div>
            </div>
            <div className="flex-1 max-w-7xl w-full mx-auto py-8">{children}</div>
            <Footer />
          </div>
        </HomeWrapper>
        <Toaster />
      </body>
    </html>
  );
}
