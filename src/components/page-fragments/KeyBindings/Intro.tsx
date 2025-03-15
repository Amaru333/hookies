import BadgeContainer from "@/common/BadgeContainer";
import React from "react";

function Intro() {
  return (
    <section id="introduction">
      <h1 className="text-3xl font-semibold mb-4">Key Bindings</h1>
      <BadgeContainer packageName="@hookies/key-bindings" />

      <p className="py-4 text-slate-600 dark:text-slate-300">
        Key bindings are a way to bind keys to actions. This is useful for users who prefer to use
        the keyboard over the mouse. Key bindings can be used to trigger actions like opening a
        menu, closing a dialog, or submitting a form. Key bindings can also be used to navigate
        through a website or application.
      </p>
    </section>
  );
}

export default Intro;
