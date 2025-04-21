import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stylists from "@/components/sections/Stylists";
import Instagram from "@/components/sections/Instagram";
import Contact from "@/components/sections/Contact";
import JoinTeam from "@/components/sections/JoinTeam";
import Shop from "@/components/sections/Shop";

const Home = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <Hero />
      <About />
      <Stylists />
      <Instagram />
      <Contact />
      <JoinTeam />
      <Shop />
      <Footer />
    </div>
  );
};

export default Home;
