"use client";
import { useShortcutExtended } from "@/hooks/useShortcutExtended";
import { ClipboardIcon } from "lucide-react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

function ShortcutExtended() {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  useShortcutExtended(
    (pressedKeys: Set<string>) => {
      setPressedKeys(Array.from(pressedKeys));
    },
    { preventDefault: true }
  );

  const pressedKeysString = pressedKeys.map((element) => `'${element}'`).join(", ");
  const useShortcutFunction = `useShortcutExtended([${pressedKeysString}], func);`;
  const useShortcutPreview = `// Press keys on your keyboard to see the output

  ${useShortcutFunction}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(useShortcutFunction).then(() => {
      toast.success("Copied to clipboard");
    });
  };

  return (
    <div className="relative">
      <ClipboardIcon
        className="absolute top-4 right-4 w-5 h-5 text-slate-300 cursor-pointer hover:opacity-80"
        onClick={copyToClipboard}
      />
      <SyntaxHighlighter language="javascript" style={coldarkDark} className="rounded-md">
        {useShortcutPreview}
      </SyntaxHighlighter>
    </div>
  );
}

export default ShortcutExtended;
