import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GETOS_USAGE, USESHORTCUT_USAGE, USESHORTCUTEXTENDED_USAGE } from "./usage";

function UsageDetails() {
  return (
    <section id="usage">
      <h2 className="text-2xl font-medium mb-2 mt-8">Usage</h2>
      <h3 className="text-lg font-medium mt-2">useShortcut</h3>
      <p className="text-slate-600 dark:text-slate-300">
        The <code>useShortcut</code> hook is used to detect modifier-based keyboard shortcuts. For
        example, <code>Ctrl + C</code>, <code>Shift + A</code>, <code>Meta + S</code>. The hook
        takes a callback function as an argument, which is executed when the shortcut is triggered.
        The hook also takes an optional <code>options</code> object, which can be used to prevent
        the default browser behavior.
      </p>
      <SyntaxHighlighter language="javascript" style={coldarkDark} className="rounded-md">
        {USESHORTCUT_USAGE}
      </SyntaxHighlighter>
      <h3 className="text-lg font-medium mt-4">useShortcutExtended</h3>
      <p className="text-slate-600 dark:text-slate-300">
        The <code>useShortcutExtended</code> hook is used to detect any keyboard shortcut. For
        example, <code>A + S</code>, <code>A + 1 + M</code>, <code>X + Z</code>. The hook takes a
        callback function as an argument, which is executed when the shortcut is triggered. The hook
        also takes an optional <code>options</code> object, which can be used to prevent the default
        browser behavior.
      </p>
      <SyntaxHighlighter language="javascript" style={coldarkDark} className="rounded-md">
        {USESHORTCUTEXTENDED_USAGE}
      </SyntaxHighlighter>
      <h3 className="text-lg font-medium mt-4">getOS</h3>
      <p className="text-slate-600 dark:text-slate-300">
        The <code>getOS</code> function is used to detect the user&apos;s operating system. This can
        be useful for creating platform-specific key bindings.
      </p>
      <SyntaxHighlighter language="javascript" style={coldarkDark} className="rounded-md">
        {GETOS_USAGE}
      </SyntaxHighlighter>
    </section>
  );
}

export default UsageDetails;
