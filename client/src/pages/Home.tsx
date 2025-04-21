import { useState, useEffect } from "react";
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
  // To use a real Instagram feed, you'll need to provide an access token
  // This would typically come from environment variables
  const [instagramToken, setInstagramToken] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    // Check if there's an Instagram token in the environment
    // In a real app, you'd make sure this is prefixed with VITE_ 
    // to be available on the client side
    const token = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    if (token) {
      setInstagramToken(token);
    }
  }, []);

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <Hero />
      <About />
      <Stylists />
      <Instagram accessToken={instagramToken} />
      <Contact />
      <JoinTeam />
      <Shop />
      <Footer />
    </div>
  );
};

export default Home;
