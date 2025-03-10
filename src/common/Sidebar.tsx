"use client";

import { SIDEBAR } from "@/constants/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {SIDEBAR.map((item, index) => (
        <div key={index}>
          <p className="font-semibold text-2xl pb-4">{item.category}</p>
          {item.items.map((subItem, subIndex) => (
            <Link
              key={subIndex}
              href={"/components/" + subItem.slug}
              className={`px-2 py-1 rounded flex w-full ${
                pathname === "/components/" + subItem.slug ? "bg-muted" : ""
              }`}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
