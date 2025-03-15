import BadgeContainer from "@/common/BadgeContainer";
import React from "react";

function Intro() {
  return (
    <section id="introduction">
      <h1 className="text-3xl font-semibold mb-4">Preview</h1>
      <BadgeContainer packageName="@hookies/preview" />

      <p className="py-4 text-slate-600 dark:text-slate-300">
        Preview is a component that allows you to preview the content of a file before uploading it.
        Currently it supports previewing images. Preview is useful for users who want to see what
        they are uploading before they upload it. Preview can be used to show a thumbnail of the
        image, the file name, and the file size. Preview can also be used to show a preview of the
        image in a modal or a lightbox.
      </p>
    </section>
  );
}

export default Intro;
