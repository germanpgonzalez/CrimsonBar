import HeroImg from "../../assets/heroimg.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src={HeroImg}
        alt="hero crimson"
        className="absolute w-full h-full object-cover object-[center_10%]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 flex items-center max-w-6xl mx-auto px-4">
        <div className="flex flex-col max-w-lg gap-6">
          <h1 className="md:text-6xl font-bold text-white leading-tight font-[Bebas_Neue] text-6xl tracking-wide">
            Donde los <br />
            <span className="text-red-600">cócteles</span> <br />
            cobran vida
          </h1>
          <p className="text-neutral-300 mb-6 max-w-md">
            En Crimson Bar combinamos sabores, técnica y pasión para crear
            cócteles únicos. Cada detalle está pensado para ofrecerte una
            experiencia nocturna distinta.
          </p>
          <button className="border border-red-600 text-red-600 px-6 py-3 hover:bg-red-600 hover:text-white transition w-fit cursor-pointer">
            Explorar Cócteles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
