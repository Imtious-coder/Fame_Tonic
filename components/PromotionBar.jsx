import Image from "next/image";

const PromotionBar = ({ message1, message2, gradientColors, RocketIcon }) => {
  return (
    <div
      className={`flex items-center justify-center m-0 p-0 w-[100%] h-[46px] font-figtree ${gradientColors}`}
    >
      <div className="flex items-center justify-center w-[882px]">
        <Image
          width={22}
          height={22}
          src={RocketIcon}
          alt="Rocket Icon"
          className="rocket-icon mr-1"
        /> {' '}
        <p>
          <span className="font-extrabold text-[22px] text-[#00E7F9]">
            {message1} {' '}
          </span>
          <span className="font-bold text-[22px] text-[#FFFFFF] ">
            {message2}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PromotionBar;
