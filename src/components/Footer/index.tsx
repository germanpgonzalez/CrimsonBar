import { Link } from "react-router-dom";
import FooterLogo from "../../assets/footerlogo.png";
import { IoLogoInstagram } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <img src={FooterLogo} alt="Footer" />
          <p className="text-neutral-400 max-w-xs">
            Donde la coctelería se convierte en una experiencia única.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navegación</h4>
          <ul className="text-neutral-400 space-y-2 cursor-pointer">
            <li className=" hover:text-red-600">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:text-red-600">
             <Link to="/cocktails">Cocktails</Link> 
            </li>
            <li className=" hover:text-red-600">
              <Link to="/categorias">Categorías</Link>
            </li>
            <li className=" hover:text-red-600">
              <Link to="/favoritos">Favoritos</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <ul className="flex flex-col gap-4 text-neutral-400 text-xl cursor-pointer">
            <li className="hover:text-red-600 transition cursor-pointer">
              <IoLogoInstagram />
            </li>
            <li className="hover:text-red-600 transition cursor-pointer">
              <ImFacebook2 />
            </li>
            <li className="hover:text-red-600 transition cursor-pointer">
              <FaSquareXTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-neutral-500 text-sm pb-6 mt-16">
        © 2026 Crimson Bar. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
