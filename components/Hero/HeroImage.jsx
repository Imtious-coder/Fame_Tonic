import Image from "next/image";

const HeroImage = ({ src, alt }) => {
  return (
    <div className="absolute top-[-62px] md:top-[-29px] md:right-[101px] z-10">
      <Image
        src={src}
        alt={alt}
        className="md:w-[666px] h-[426px] md:h-[679px]"
      />
    </div>
  );
};

export default HeroImage;
