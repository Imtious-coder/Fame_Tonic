import HeroPhoneImage from "../../utils/Images/Phone_Image.png";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const bulletPoints = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

const HeroSection = () => {
  return (
    <section className="relative">
      <HeroContent
        title="Want to Turn Social Media Into a Profitable Career?"
        highlight="Discover your way to success with Fametonic:"
        description={bulletPoints}
        ctaText="GET STARTED"
        ctaLink="#"
        subNote="1-minute quiz for personalized Insights"
      />
      <HeroImage src={HeroPhoneImage} alt="Fametonic dashboard" />
    </section>
  );
};

export default HeroSection;
