import { SIDEBAR } from "@/constants/sidebar";
import Link from "next/link";
import React from "react";

function Homepage() {
  return (
    <div>
      {SIDEBAR.map((item, index) => (
        <div key={index}>
          <p className="font-semibold text-2xl pb-4">{item.category}</p>
          <div className="grid grid-cols-4 gap-4">
            {item.items.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={"/components/" + subItem.slug}
                className="p-4 rounded-md flex flex-col w-full border hover:border-muted-foreground"
              >
                <p className="text-xl font-semibold mb-4">{subItem.title}</p>
                <p className="line-clamp-4 text-muted-foreground text-sm">{subItem.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
