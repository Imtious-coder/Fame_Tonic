import Image from "next/image";

const BulletPoints = ({ icon, text }) => {
  return (
    <li className="flex items-center gap-[10px] leading-[22px] mb-[13px]">
      <Image width={22} height={22} className="w-[22px] h-[22px]" src={icon} alt={"Star Icon"} />
      <p>{text}</p>
    </li>
  );
};

export default BulletPoints;
