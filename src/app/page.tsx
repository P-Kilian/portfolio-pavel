import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Footer from "./components/layout/Footer";
import Banner from "./components/layout/Banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-5">
        <Hero />
        <Banner />
        <About />
        <Banner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
