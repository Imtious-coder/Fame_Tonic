import Image from "next/image";

const PromotionBar = ({ message1, message2, gradientColors, RocketIcon }) => {
  return (
    <div
      className={`flex items-center justify-center w-[100%] h-[76px] lg:h-[46px] p-[40px] lg:p-0 ${gradientColors} figtree-font`}
    >
      <div className="flex items-start lg:items-center lg:gap-1 justify-center w-[360px] lg:w-[882px] h-[36px] !lg:h-[26px]">
        <Image
          width={22}
          height={22}
          src={RocketIcon}
          alt="Rocket Icon"
          className="rocket-icon w-[16px] mr-[-1px] ml-[-7px] lg:mx-0 h-[16px] lg:w-[22px] lg:!h-[22px]"
        />
        <p className="figtree-font lg:m-0 p-0 text-center leading-[17px]">
          <span className="font-bold text-[16px] lg:text-[22px] text-[#00E7F9]">
            {message1}
          </span>{" "}
          <span className="font-semibold text-[14px] lg:text-[22px] text-[#FFFFFF] tracking-[-0.5px]">
            {message2}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PromotionBar;
