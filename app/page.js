import PromotionBar from "@/components/PromotionBar";
import RocketIcon from "../utils/Images/rocket.png"

export default function Home() {
  return (
    <main className="bg-[#010101] h-[805px]">
      <PromotionBar
        RocketIcon={RocketIcon}
        message1="FRESH BEGINNINGS SALE:"
        message2="Extra 25% OFF, Limited Spots - start your journey today!"
        gradientColors="bg-gradient-to-r from-[#FC004E] to-[#10CBE0]"
      />
    </main>
  );
}
