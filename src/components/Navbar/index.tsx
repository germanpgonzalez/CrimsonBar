import { NavLink } from "react-router-dom";
import Logo from "../../assets/crimsonlogo.png";

const Navbar = () => {
  return (
    <nav className="bg-black text-white  border-b border-neutral-800 font-[Inter] ">
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full px-4">
        <img
          src={Logo}
          alt="Crimson Bar logo"
          className="h-30 object-contain cursor-pointer"
        />

        <ul className="flex gap-3 cursor-pointer">
          <li className="hover:text-red-600 transition-colors">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "text-white hover:text-red-600 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-red-600 transition-colors">
            <NavLink
              to="/cocktails"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "text-white hover:text-red-600 transition-colors"
              }
            >
              Cocktails
            </NavLink>
          </li>
          <li className="hover:text-red-600 transition-colors">
            <NavLink
              to="/categorias"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "text-white hover:text-red-600 transition-colors"
              }
            >
              Categorías
            </NavLink>
          </li>
          <li className="hover:text-red-600 transition-colors">
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600"
                  : "text-white hover:text-red-600 transition-colors"
              }
            >
              Favoritos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
