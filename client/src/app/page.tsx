import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Habilidades from "@/components/Habilidades";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
        <Navbar/>
        <Hero/>
        <About/>
        <Habilidades/>
        <Projects/>
        <Sidebar/>
        <Footer/>
    </div>
  );
}