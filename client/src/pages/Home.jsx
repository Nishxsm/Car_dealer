import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Recent from "../components/Recent";
import Brands from "../components/Brands";
import Testimonial from "../components/Testimonial";
import Form from "../components/Form";
import EMI from "../components/Emi";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Featured />
      <Recent />
      <EMI />
      <Form />
      <Testimonial />
    </>
  );
}
