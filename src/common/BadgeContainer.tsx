import Image from "next/image";
import React from "react";

function BadgeContainer({ packageName }: { packageName: string }) {
  return (
    <div className="flex flex-row space-x-4">
      <a href={`https://www.npmjs.com/package/${packageName}`} target="_blank" rel="noreferrer">
        <Image
          height={20}
          width={0}
          sizes="100vw"
          className="h-6 w-auto"
          alt="NPM Downloads"
          src={`https://img.shields.io/npm/v/${packageName}?color=blue`}
        />
      </a>
      <a href={`https://www.npmjs.com/package/${packageName}`} target="_blank" rel="noreferrer">
        <Image
          height={0}
          width={0}
          sizes="100vw"
          className="h-6 w-auto"
          alt="NPM Version"
          src={`https://img.shields.io/npm/dm/${packageName}?color=white`}
        />
      </a>
    </div>
  );
}

export default BadgeContainer;
