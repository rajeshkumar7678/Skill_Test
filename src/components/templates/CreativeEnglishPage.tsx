import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HeroSection from "../creativeWritingPage/HeroSection";
import Contentsection from "../creativeWritingPage/Contentsection";
import FAQsection from "../creativeWritingPage/FAQsection";
import Newsletter from "../creativeWritingPage/Newsletter";
import Ourpartner from "../creativeWritingPage/Ourpartner";

export default function CreativeEnglishPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Contentsection />
      <FAQsection />
      <Newsletter />
      <Ourpartner />
      <Footer />
    </div>
  );
}
