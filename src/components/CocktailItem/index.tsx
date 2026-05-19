import type { CocktailType } from "../CocktailsList";
import { FaRegHeart, FaArrowRight } from "react-icons/fa";

type Props = {
  cocktail: CocktailType;
};

export const CocktailItem = ({ cocktail }: Props) => {
  return (
    <article className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl max-w-md h-full flex flex-col">
      <div className="relative">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="w-full h-80 object-cover"
        />

        <button className="absolute top-5 right-5 text-red-500 text-4xl cursor-pointer">
          <FaRegHeart />
        </button>

        <span className="absolute bottom-4 left-4 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-xl uppercase tracking-wide">
          Cocktail
        </span>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white">{cocktail.strDrink}</h3>

        <p className="text-red-500 text-2xl">Clásico</p>

        <p className="text-neutral-400">
          Descubre la receta de este clásico cóctel y sus ingredientes.
        </p>

        <button className="inline-flex items-center gap-3 text-red-500 text-2xl font-semibold uppercase tracking-wide border-b border-red-500 pb-1 hover:text-red-400 cursor-pointer">
          Ver detalle
          <FaArrowRight />
        </button>
      </div>
    </article>
  );
};
