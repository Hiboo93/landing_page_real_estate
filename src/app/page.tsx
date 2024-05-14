import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProperties from "@/components/FeaturedProperties";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";



export default function Home() {
  return (
    <main >
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <FeaturedProperties/>
      <Services/>
      <AboutUs/>
      <Testimonials/>
    </main>
  );
}
