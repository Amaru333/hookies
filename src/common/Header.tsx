"use client";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center font-[Doto] text-3xl font-semibold">
      <Link href="/">
        <p>@hookies</p>
      </Link>
      <button onClick={toggleTheme} className="cursor-pointer">
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </div>
  );
}

export default Header;
