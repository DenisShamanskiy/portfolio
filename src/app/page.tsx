import Header from "@/components/Header";
import Quote from "@/components/Quote";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto mt-28 flex min-h-screen w-full min-w-[360px] max-w-5xl flex-col items-center justify-between gap-28">
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
