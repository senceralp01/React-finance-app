import React from "react";
import Analytics from "./home-components/Analytics";
import Cards from "./home-components/Cards";
import Footer from "./home-components/Footer";
import Hero from "./home-components/Hero";
import Newsletter from "./home-components/Newsletter";

function Home() {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;