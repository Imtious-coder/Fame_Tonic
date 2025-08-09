import Image from "next/image";

const HeroImage = ({ src, alt }) => {
  return (
    <div className="absolute -top-[29px] right-[101px] z-10">
      <Image src={src} alt={alt} className="w-[666px] h-[679px]" />
    </div>
  );
};

export default HeroImage;
