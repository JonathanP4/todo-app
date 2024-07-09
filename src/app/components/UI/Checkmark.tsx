"use client";

import Image from "next/image";
import { useState } from "react";

export default function Checkmark() {
  const [active, setActive] = useState(false);
  const activeStyles = active ? "bg-gradient-to-br from-aqua to-purple" : "";

  return (
    <div
      onClick={() => setActive((state) => !state)}
      className={`${activeStyles} border-[1px] border-dark-300 w-6 h-6 rounded-full grid place-content-center cursor-pointer mr-5`}
    >
      {active && (
        <Image
          width={12}
          height={12}
          src={"/images/icon-check.svg"}
          alt="check"
        />
      )}
    </div>
  );
}
