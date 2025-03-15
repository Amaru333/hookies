import Clipboard from "@/components/ui/clipboard";
import React from "react";

function Installation() {
  return (
    <section id="installation">
      <h2 className="text-2xl font-medium mb-2 mt-4">Installation</h2>
      <Clipboard>npm i @hookies/preview</Clipboard>
    </section>
  );
}

export default Installation;
