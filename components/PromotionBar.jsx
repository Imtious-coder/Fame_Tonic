import Image from "next/image";

const PromotionBar = ({ message1, message2, gradientColors, RocketIcon }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 m-0 p-0 w-[882px] h-[46px] font-figtree ${gradientColors}`}
    >
      <Image
        width={22}
        height={22}
        src={RocketIcon}
        alt="Rocket Icon"
        className="rocket-icon"
      />
      <p>
        <span className="font-extrabold text-[22px] text-[#00E7F9] ">
          {message1}
        </span>
        <span className="font-bold text-[22px] text-[#FFFFFF] ">
          {message2}
        </span>
      </p>
    </div>
  );
};

export default PromotionBar;
