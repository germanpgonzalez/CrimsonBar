import type { ReactNode } from "react"
import Navbar from "../components/Navbar";

type Props = {
    children: ReactNode;
}
export const Layout = ( {children} : Props) => {
  return (
    <div className="bg-black text-white min-h-screen bg-[radial-gradient(circle_at_bottom,_rgba(220,20,60,0.15),_transparent_60%)]">
        <Navbar/>

        <main className="max-w-6xl mx-auto w-full px-4 py-6">
            {children}
        </main>
    </div>
  )
}
