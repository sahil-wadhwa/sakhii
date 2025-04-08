import FAQSection from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import Navbar from "@/components/navbar";
import PreView from "@/components/preview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <PreView/>
      <Features/>
      <Hero2/>
      
      <FAQSection/>
      <Footer/>
    </div>
  );
}
