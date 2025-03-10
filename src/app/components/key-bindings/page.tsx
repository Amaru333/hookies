import KeyBindingsFragment from "@/components/page-fragments/KeyBindings";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Key Bindings - Hookies",
  description:
    "Key bindings are a way to bind keys to actions. This is useful for users who prefer to use the keyboard over the mouse. Key bindings can be used to trigger actions like opening a menu, closing a dialog, or submitting a form. Key bindings can also be used to navigate through a website or application.",
  keywords: [
    "key bindings",
    "keyboard shortcuts",
    "keyboard navigation",
    "keyboard events",
    "keyboard input",
  ],
};

function KeyBindings() {
  return <KeyBindingsFragment />;
}

export default KeyBindings;
