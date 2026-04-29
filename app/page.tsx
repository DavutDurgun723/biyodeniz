import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import Product from "./sections/Product";
import Roadmap from "./sections/Roadmap";
import Impact from "./sections/Impact";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Product />
        <Roadmap />
        <Impact />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
