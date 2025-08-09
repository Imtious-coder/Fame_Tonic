import Image from "next/image";

const PromotionBar = ({ message1, message2, gradientColors, RocketIcon }) => {
  return (
    <div
      className={`flex items-center justify-center m-0 p-0 w-[100%] h-[46px] ${gradientColors} figtree-font`}
    >
      <div className="flex items-center justify-center">
        <Image
          width={22}
          height={22}
          src={RocketIcon}
          alt="Rocket Icon"
          className="rocket-icon mr-1"
        />
        <p className="figtree-font m-0 p-0">
          <span className="font-extrabold text-[22px] text-[#00E7F9]">
            {message1}
          </span>{" "}
          <span className="font-bold text-[22px] text-[#FFFFFF]">
            {message2}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PromotionBar;
