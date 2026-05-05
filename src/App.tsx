import { Layout } from "./Layout";
import Hero from './components/Hero';
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <div className="max-w-6xl mx-auto w-full px-4 py-6">
        {/* contenido después del hero */}
        </div>
        <Footer/>
      </Layout>
    </>
  );
}

export default App;
