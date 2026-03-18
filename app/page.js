// app/page.js
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Shri Kipra - Digital Marketing & Branding Agency",
  description:
    "Transform your brand with expert digital marketing, SEO, and business growth solutions.",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Clients />
      <Testimonials />
      <CTABanner />
    </>
  );
}
