import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Recent from "../components/Recent";
import Brands from "../components/Brands";
import Testimonial from "../components/Testimonial";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Brands />
      <Form />
      <Testimonial />
    </>
  );
}
