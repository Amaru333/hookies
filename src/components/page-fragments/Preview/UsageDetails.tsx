import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { USEPREVIEW_USAGE } from "./usage";

function UsageDetails() {
  return (
    <section id="usage">
      <h2 className="text-2xl font-medium mb-2 mt-8">Usage</h2>
      <h3 className="text-lg font-medium mt-2">usePreview</h3>
      <p className="text-slate-600 dark:text-slate-300">
        The <code>usePreview</code> hook is used to generate a live preview of an uploaded image
        file. The hook takes a <code>File</code> object as an argument and returns a URL string that
        can be used to display the preview.
      </p>
      <SyntaxHighlighter language="javascript" style={coldarkDark} className="rounded-md">
        {USEPREVIEW_USAGE}
      </SyntaxHighlighter>
    </section>
  );
}

export default UsageDetails;
