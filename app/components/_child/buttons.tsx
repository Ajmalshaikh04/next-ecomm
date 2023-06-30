// "use client";
// import Image from "next/image";
// import { useSession, signIn, signOut } from "next-auth/react";
// import Link from "next/link";
// import { Session } from "next-auth";

// export function SignInButton({ user }: Session) {
//   const { data: session, status } = useSession();
//   console.log(session, status);

//   if (status === "loading") {
//     return <>...</>;
//   }
//   if (status === "authenticated") {
//     return (
//       <>
//         <Link href={"/"}>
//           <Image
//             src={user?.image as string}
//             alt={user?.name as string}
//             width={48}
//             height={48}
//             className="object-cover rounded-full"
//           />
//         </Link>
//       </>
//     );
//   }
//   return <button onClick={() => signIn()}>Sign In</button>;
// }


// export function SignOutButton() {
//   return <button onClick={() => signOut()}>Sign Out</button>;
// }
