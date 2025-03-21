import KeyBindingsFragment from "@/components/page-fragments/KeyBindings";
import { SIDEBAR } from "@/constants/sidebar";
import { Metadata } from "next";
import React from "react";

const metaDataDetails = SIDEBAR[0].items.find((item) => item.slug === "key-bindings");

export const metadata: Metadata = {
  title: `${metaDataDetails?.title} - Hookies`,
  description: metaDataDetails?.description,
  keywords: metaDataDetails?.tags,
};

function KeyBindings() {
  return <KeyBindingsFragment />;
}

export default KeyBindings;
