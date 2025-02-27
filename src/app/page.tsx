import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/project/Projects";
import Skill from "@/components/sections/skill/Skill";

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
