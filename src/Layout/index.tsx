import type { ReactNode } from "react"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

type Props = {
    children: ReactNode;
}
export const Layout = ( {children} : Props) => {
  return (
    <div className="bg-black text-white min-h-screen">
        <Navbar/>
        <Hero/>
        <main className="max-w-6xl mx-auto w-full px-4 py-6">
            {children}
        </main>
    </div>
  )
}
