import { getServerSession } from "next-auth"



export default async function Home() {
  const session=await getServerSession()

  return (
    <main className="">
      Heyyyyyyyyyyyyyyy
    </main>
  )
}


