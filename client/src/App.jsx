import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Brands from "./components/Brands";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Recent from "./components/Recent";
import Emi from "./components/Emi";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Featured />
      <Recent />
      <Emi />
      
      <Testimonial />
      <Footer />
      
    </>
  );
}
