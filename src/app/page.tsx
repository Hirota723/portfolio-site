import About from "@/components/layouts/About";
import Contact from "@/components/layouts/Contact";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Projects from "@/components/layouts/Projects";
import Skill from "@/components/layouts/Skill";

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
