import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProperties from "@/components/FeaturedProperties";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";




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
      <Faq/>
      <Footer/>
    </main>
  );
}
