import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="z-30 fixed w-full top-0 left-0 bg-stone-900 p-4 flex justify-around text-stone-100 text-2xl font-medium">
      <h1 className="">Draggize</h1>
      <Image src="/logo.svg" alt="logo" height={35} width={35} />
    </header>
  );
}

export default Header;
