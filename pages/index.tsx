import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";


export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "Just get into my world of learnings and have a look at them" }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <About/>
        <Projects />
        <Skills />
        <Experience/>
      </div>
      <CTA />
    </Page>
  );
}
