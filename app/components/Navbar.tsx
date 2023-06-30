"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ user }: Session) {
  return (
    <nav className="flex items-center justify-between py-8">
      <h1>Styled</h1>
      {!user && (
        <div>
          <button onClick={() => signIn()}>Sign In</button>
        </div>
      )}
      {
        user && (
            <Link href={'/'}>
                <Image src={user?.image!} alt={user?.name!} height={40}
                width={40} className="object-cover rounded-full"/>
            </Link>
        )
      }
    </nav>
  );
}
