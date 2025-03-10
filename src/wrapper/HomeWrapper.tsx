"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";

function HomeWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default HomeWrapper;
