import { About } from "@/components/About";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Membership } from "@/components/Membership";
import { Sections } from "@/components/Sections";
import { Testimonial } from "@/components/Testimonial";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Sections />
      <Membership />
      <Testimonial />
      <About />
      <Footer />
    </div>
  );
}
