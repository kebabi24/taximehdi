import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Plan from "../components/Plan";
import Product from "../components/Product";
import Numbers from "../components/Numbers";
import Informations from "../components/Informations";
import Testimonials from "../components/Testimonials";
import Testimonials2 from "../components/Testimonials2";
import Contact from "../components/Contact";
import Items from "../components/Items";
import PhoneCall from "../components/PhoneCall";
import Services from "../components/Services";
import Call from "../components/Call";
import FollowersBar from "../components/FollowersBar";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import NavbarCustomized from "../components/NavbarCustomized";
import TaxiBooking from "../components/TaxiBooking";
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
          <Plan></Plan>
          <Numbers></Numbers>

          {/*<Product></Product>*/}
          {/*<FollowersBar></FollowersBar>*/}
          <Informations></Informations>
          <Services></Services>

          <Call></Call>
          <Testimonials></Testimonials>
          <Testimonials2></Testimonials2>
          <Contact></Contact>
        </div>
      )}
    </InView>
  );
}

export default App;
