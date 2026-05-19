import CocktailList from "../components/CocktailsList";
import  ExperiencieSection  from "../components/ExperienceSection";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main>
        <Hero/>
        <ExperiencieSection/>
        <CocktailList/>
    </main>
  )
}


export default Home;