import Image from "next/image";

const PromotionBar = ({ message1, message2, gradientColors, RocketIcon }) => {
  return (
    <div
      className={`flex items-center justify-center w-[100%] h-[46px] ${gradientColors} figtree-font`}
    >
      <div className="flex items-center gap-1 justify-center w-[882px] h-[26px]">
        <Image
          width={22}
          height={22}
          src={RocketIcon}
          alt="Rocket Icon"
          className="rocket-icon"
        />
        <p className="figtree-font m-0 p-0">
          <span className="font-bold text-[22px] text-[#00E7F9]">
            {message1}
          </span>{" "}
          <span className="font-semibold text-[22px] text-[#FFFFFF]">
            {message2}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PromotionBar;
