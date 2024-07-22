import Navbar from "../components/Navbar";
import Home from "../components/Home";

import Product from "../components/Product";
import Informations from "../components/Informations";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Items from "../components/Items";
import Services from "../components/Services";
import Call from "../components/Call";
import FollowersBar from "../components/FollowersBar";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import NavbarCustomized from "../components/NavbarCustomized";
function App() {
  const { ref, inView, entry } = useInView({
    threshold: 0.25,
  });
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div ref={ref}>
          {/* <NavbarCustomized></NavbarCustomized> */}
          <Home />

          <Product></Product>
          <FollowersBar></FollowersBar>
          <Informations></Informations>
          <Services></Services>

          <Call></Call>
          <Testimonials></Testimonials>
          <Contact></Contact>
        </div>
      )}
    </InView>
  );
}

export default App;
