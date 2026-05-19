import BartenderImg from "../../assets/bartender.jpg";
import IngredientsImg from "../../assets/ingredients.jpg";
import AmbienceImg from "../../assets/ambience.jpg";

import { FaCocktail, FaGlassCheers } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

const ExperienceSection = () => {
  const features = [
    {
      id: 1,
      image: BartenderImg,
      icon: <FaCocktail />,
      title: "Maestros Bartenders",
      description:
        "Nuestros bartenders combinan técnica, creatividad y pasión en cada preparación.",
    },
    {
      id: 2,
      image: IngredientsImg,
      icon: <GiFruitBowl />,
      title: "Ingredientes Premium",
      description:
        "Seleccionamos cuidadosamente cada ingrediente para lograr sabores únicos e inolvidables.",
    },
    {
      id: 3,
      image: AmbienceImg,
      icon: <FaGlassCheers />,
      title: "Ambiente Exclusivo",
      description:
        "Un espacio sofisticado diseñado para disfrutar una experiencia única e inolvidable.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            La Experiencia <span className="text-red-600">Crimson</span>
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Cada cocktail cuenta una historia de pasión, elegancia y excelencia.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:border-red-600 transition-all duration-300"
            >

              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover"
              />


              <div className="p-6">
                <div className="text-red-600 text-4xl mb-4">
                  {feature.icon}
                </div>


                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>


                <p className="text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;