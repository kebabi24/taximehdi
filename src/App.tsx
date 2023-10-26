import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Goals from "./components/Goals";
import Team from "./components/Team";
import Partner from "./components/Partner";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Items from "./components/Items";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About></About>
      <Goals></Goals>
      <Team></Team>

      <Product></Product>
      <Services></Services>
      {/* <Items></Items> */}
      <Partner></Partner>
      <Contact></Contact>
    </>
  );
}

export default App;
