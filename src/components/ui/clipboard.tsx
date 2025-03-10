"use client";
import { LucideClipboard } from "lucide-react";
import React from "react";
import { toast } from "sonner";

function Clipboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const copyToClipboard = () => {
    if (children) {
      navigator.clipboard.writeText(children.toString()).then(() => {
        toast.success("Copied to clipboard");
      });
    }
  };
  return (
    <div className="border p-2 rounded-md flex bg-muted">
      <code className="flex-1">{children}</code>
      <LucideClipboard
        size={20}
        className="text-muted-foreground hover:opacity-70 cursor-pointer"
        onClick={copyToClipboard}
      />
    </div>
  );
}

export default Clipboard;
