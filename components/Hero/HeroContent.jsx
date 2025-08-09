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
    <div className="lg:w-[516px] lg:h-[511px] p-[20px] pb-0 lg:p-0 lg:pt-[57px] lg:ml-[215px] z-20 relative top-[280px] md:top-0">
      <h1 className="urbanist-font font-bold lg:font-semibold text-[25px] md:text-[35px] md:leading-[42px] text-[#FFFFFF] w-full md:tracking-[-1px] text-center md:text-start leading-[32px]">
        {title}
      </h1>
      <h1 className="urbanist-font font-bold lg:font-semibold text-[25px] md:text-[35px] md:leading-[42px] text-[#00E7F9] w-full text-center md:text-start leading-[32px] hero-text-shadow">
        {highlight}
      </h1>

      {/* BulletPoints */}
      <ul className="mt-[22px] md:mt-4 figtree-font text-[#FFFFFF] text-[16px] mb-[22px] md:mb-[30px]">
        {description.map((item, idx) => (
          <BulletPoints key={idx} icon={StartIcon} text={item} />
        ))}
      </ul>

      {/* Bottom info for small device */}
      <div className="w-full flex md:hidden flex-col items-center mb-[32px]">
        <p className="font-medium figtree-font text-center w-[281px] text-[12px] text-[#ABABAB] mb-[19px]">
          By clicking "Get Started", you agree with Terms and Conditions,
          Privacy Policy, Subscription Terms
        </p>
        <p className="font-medium figtree-font text-[10px] text-[#ABABAB]">
          Fametonic 2025 ©All Rights Reserved.
        </p>
      </div>

      {/* Button CTA */}
      <div className="md:w-[313px] h-[40px] px-[40px] py-[8px] flex items-center justify-center bg-[#FC004E] hero-cta-button-shadow rounded-[10px] text-[#FFFFFF]   font-semibold text-[20px] gap-[10px] cursor-pointer">
        <p className="figtree-font hidden md:block">{ctaText}</p>
        <p className="urbanist-font block md:hidden">{ctaText}</p>
        <Image src={ArrowIcon} alt={"Icon"} />
      </div>
      <h6 className="md:w-[313px] h-[16px] text-center text-[#FFFFFF] figtree-font text-[12px] leading-[16px] mt-[10px]">
        {subNote}
      </h6>

      {/* Bottom info for large device */}
      <p className="hidden md:block font-medium figtree-font text-[12px] text-[#ABABAB] mt-[30px] mb-[12px]">
        By clicking "Get Started", you agree with Terms and Conditions, Privacy
        Policy, Subscription Terms
      </p>
      <p className="hidden md:block font-medium figtree-font text-[10px] text-[#ABABAB]">
        Fametonic 2025 ©All Rights Reserved.
      </p>
    </div>
  );
};

export default HeroContent;
