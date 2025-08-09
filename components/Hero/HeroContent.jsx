import Image from "next/image";
import ArrowIcon from "../../utils/Images/ArrowIcon.svg";
import StartIcon from "../../utils/Images/star.png";
import BulletPoints from "./BulletPoints";

const HeroContent = ({
  title,
  highlight,
  description,
  ctaText,
  ctaLink,
  subNote,
}) => {
  return (
    <div className="w-[516px] h-[511px] pt-[57px] ml-[215px] z-20 relative">
      <h1 className="urbanist-font font-bold text-[35px] leading-[42px] text-[#FFFFFF] w-full tracking-[-1px]">
        {title}
      </h1>
      <h1 className="urbanist-font font-bold text-[35px] leading-[42px] text-[#00E7F9] w-full hero-text-shadow">
        {highlight}
      </h1>

      <ul className="mt-4 figtree-font text-[#FFFFFF] text-[16px] font-semibold mb-[30px]">
        {description.map((item, idx) => (
          <BulletPoints
            key={idx}
            icon={
              <Image width={22} height={22} src={StartIcon} alt={"Star Icon"} />
            }
            text={item}
          />
        ))}
      </ul>

      <div className="w-[313px] h-[40px] px-[40px] py-[8px] flex items-center justify-center bg-[#FC004E] hero-cta-button-shadow rounded-[10px] text-[#FFFFFF] figtree-font font-bold text-[20px] gap-[10px]">
        <p>{ctaText}</p>
        <Image src={ArrowIcon} alt={"Icon"} />
      </div>
      <h6 className="w-[313px] h-[16px] text-center text-[#FFFFFF] figtree-font text-[12px] leading-[16px] mt-[10px]">
        {subNote}
      </h6>

      <p className="font-medium figtree-font text-[12px] text-[#ABABAB] mt-[30px] mb-[12px]">
        By clicking "Get Started", you agree with Terms and Conditions, Privacy
        Policy, Subscription Terms
      </p>
      <p className="font-medium figtree-font text-[10px] text-[#ABABAB]">
        Fametonic 2025 ©All Rights Reserved.
      </p>
    </div>
  );
};

export default HeroContent;
