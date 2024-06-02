import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Goals from "./components/Goals";
import Team from "./components/Team";
import Partner from "./components/Partner";
import Product from "./components/Product";
import Informations from "./components/Informations";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Items from "./components/Items";
import Services from "./components/Services";
import Call from "./components/Call";
import FollowersBar from "./components/FollowersBar";
function App() {
  return (
    <>
      <Home />
      <FollowersBar></FollowersBar>
      <Services></Services>
      <Product></Product>

      <Informations></Informations>
      <Testimonials></Testimonials>
      <Call></Call>

      <Contact></Contact>

      {/* <About></About>
      <Goals></Goals>
      <Team></Team>

    
      <Items></Items>
      <Partner></Partner>
      <Contact></Contact> */}
    </>
  );
}

export default App;
