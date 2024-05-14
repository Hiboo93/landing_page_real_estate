import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProperties from "@/components/FeaturedProperties";


export default function Home() {
  return (
    <main >
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <FeaturedProperties/>
    </main>
  );
}
