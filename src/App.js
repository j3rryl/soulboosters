import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Themes from "./pages/Themes";
import Stories from "./pages/Stories/Stories";
import Involve from "./pages/Involve";
import Faq from "./pages/Faq";
import Lamu from "./pages/Counties/Lamu";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Home/>} path='/soulboosters'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Themes/>} path='/themes'/>
      <Route element={<Lamu/>} path='/stories/lamu'/>
      <Route element={<Stories/>} path='/stories'/>
      <Route element={<Involve/>} path='/involve'/>
      <Route element={<Faq/>} path='/faq'/>
    </Routes>
    </>
  );
}

export default App;
