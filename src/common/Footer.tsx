import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="border-t py-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground">
          Built by{" "}
          <Link
            href="https://www.amrutesh.me/"
            target="_blank"
            className="underline hover:text-black hover:dark:text-white"
          >
            Amaru
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
