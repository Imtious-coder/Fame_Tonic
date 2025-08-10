import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar";
import PromotionBar from "@/components/PromotionBar";
import Logo from "../utils/Images/Logo.svg";
import RocketIcon from "../utils/Images/rocket.png";

export default function Home() {
  return (
    <main className="bg-[#010101] h-[1007px] lg:h-[805px] 2xl:h-[1000px] ">
      <PromotionBar
        RocketIcon={RocketIcon}
        message1="FRESH BEGINNINGS SALE:"
        message2="Extra 25% OFF, Limited Spots - start your journey today!"
        gradientColors="bg-[linear-gradient(49deg,#FC004E,#10CBE0)] lg:bg-[linear-gradient(to right,#FC004E,#10CBE0)]"
      />
      <Navbar 
        logo={Logo} 
        navLinks={[{name: "About us", href: "#"}, {name: "Contact", href: "#"}]} 
      />
      <HeroSection />
    </main>
  );
}
