import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skill from "@/components/sections/Skill";

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
