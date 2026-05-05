import { Link } from "react-router-dom";
import Logo from "../../assets/crimsonlogo.png";

const Navbar  = () => {
  return (
    <nav className="bg-black text-white  border-b border-neutral-800 font-[Inter] ">
        <div className="flex justify-between items-center max-w-6xl mx-auto w-full px-4">
            <img src={Logo} alt="Crimson Bar logo" className="h-30 object-contain cursor-pointer" />

            <ul className="flex gap-3 cursor-pointer">
                <li className="hover:text-red-600 transition-colors">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-red-600 transition-colors">
                 <Link to="/cocktails">Cocktails</Link> 
                </li>
                <li className="hover:text-red-600 transition-colors">
                  <Link to="/categorias"></Link> 
                </li>
                <li className="hover:text-red-600 transition-colors">
                  <Link to="/favoritos"></Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar 