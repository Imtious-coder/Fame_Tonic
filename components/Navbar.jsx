import Image from "next/image";
import MenuIcon from "../utils/Images/Icon.svg";

const Navbar = ({ logo, navLinks }) => {
  return (
    <nav className="flex justify-center lg:justify-between w-full lg:px-[211px] z-20 relative pt-[16.67px] lg:pt-[35px]">
      {/* Logo */}
      <Image
        src={logo}
        alt="logo"
        className="h-[44.99px] lg:h-[74px] w-[105px] lg:w-[172px]"
      />
      <div className="absolute lg:hidden top-[33.04px] right-[29px] cursor-pointer">
        <Image src={MenuIcon} alt={"menu icon"} className="w-[20px] h-[12px]" />
      </div>
      {/* Navigations */}
      <ul className="hidden lg:flex font-semibold w-[192px] h-[22px] text-[18px] gap-[40px] text-[#A9A9A9] figtree-font">
        {navLinks.map((link, i) => (
          <li key={i}>
            <a href={link.href} className="hover:underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
