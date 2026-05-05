import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout  from "./Layout";
import Home from "./pages/Home";
import Categorias from './pages/Categorias';
import Cocktails from './pages/Cocktails';
import Favoritos from './pages/Favoritos';
import "./App.css";

function App() {
  return (
    <>
    <BrowserRouter basename="/CrimsonBar">
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/categorias" element={<Categorias/>}/>
          <Route path="/cocktails" element={<Cocktails/>}/>
          <Route path="/favoritos" element={<Favoritos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
