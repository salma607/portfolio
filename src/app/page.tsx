import About from "./_components/About/About";
import Contact from "./_components/Contacts/Contacts";
import Courses from "./_components/Courses/Courses";
import Hero from "./_components/Hero/Hero";
import Navbar from "./_components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Contact />
    </main>
  );
}
