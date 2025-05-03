"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

export default function Header() {
  const [menu, toggleMenu] = useState(false);

  return (
    <>
      <div className="bg-blue flex justify-center items-center w-full h-10 text-white font-manrope text-xs font-bold">
        Quirklr, Your study pod...
      </div>
      <div className="mt-5 md:mt-0 flex px-3 items-center w-full h-16">
        <Image
          src={"/logo/q.png"}
          height={98}
          width={195}
          alt="logo"
          className="h-[49px] w-[97.5px]"
        />
        <div className="hidden ml-4 w-full md:flex justify-end items-end pb-2 gap-4 h-16 px-20 font-manrope">
          <HeaderLink href="/" text="Home" />
          <HeaderLink href="/acct/login" text="Login" />
          <HeaderLink href="/acct/Signup" text="Signup" />
          <HeaderLink href="/pod/new" text="New Pod" />
          <HeaderLink href="/pod" text="Pods" />
        </div>
        <div className="text-primary flex md:hidden justify-end w-full items-center text-4xl">
          <p>
            <CiMenuKebab />
          </p>
        </div>
      </div>
    </>
  );
}

export function HeaderLink({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="relative text-sm text-blue font-extrabold pr-2 after:bg-primary after:h-1 after:absolute after:w-0 hover:after:w-full after:left-0 after:-bottom-2 after:transition-all after:duration-300 after:ease-in-out"
    >
      {text}
    </Link>
  );
}
