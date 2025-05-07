import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Habilidades from "@/components/Habilidades";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
      <>
          <Head>
              <title>Diego Roque Portafolio</title>
          </Head>
    <div className="bg-black">

        <Navbar/>
        <Hero/>
        <About/>
        <Habilidades/>
        <Projects/>
        <Sidebar/>
        <Footer/>
    </div>
      </>
  );
}