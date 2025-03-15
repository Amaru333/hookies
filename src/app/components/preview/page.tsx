import PreviewFragment from "@/components/page-fragments/Preview";
import { SIDEBAR } from "@/constants/sidebar";
import { Metadata } from "next";
import React from "react";

const metaDataDetails = SIDEBAR[0].items.find((item) => item.slug === "preview");

export const metadata: Metadata = {
  title: `${metaDataDetails?.title} - Hookies`,
  description: metaDataDetails?.description,
  keywords: metaDataDetails?.tags,
};

function Preview() {
  return <PreviewFragment />;
}

export default Preview;
