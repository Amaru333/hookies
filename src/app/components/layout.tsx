import Sidebar from "@/common/Sidebar";
import type { Metadata } from "next";

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
    <div className="flex h-full">
      <div className="w-96">
        <Sidebar />
      </div>
      <div className="px-16">{children}</div>
    </div>
  );
}
