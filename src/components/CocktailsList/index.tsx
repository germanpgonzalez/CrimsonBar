import { useEffect, useState } from "react";
import { CocktailItem } from "../CocktailItem";

export type CocktailType = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

const CocktailList = () => {
  const [data, setData] = useState<CocktailType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink",
        );
        const result = await response.json();
        const firstSixCocktails = result.drinks.slice(0, 6);
        setData(firstSixCocktails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-14">
            Cócteles <span className="text-red-600">Clásicos</span>
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Descubre una selección de los tragos más icónicos y sofisticados de
            la coctelería mundial.
          </p>
        </div>

        <div className="m-20">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
            {data.map((cocktail: CocktailType) => (
              <li key={cocktail.idDrink}>
                <CocktailItem cocktail={cocktail} />
              </li>
            ))}
          </ul>
        </div>
        </div>   
      </section>
    </>
  );
};

export default CocktailList;
