import Image from "next/image";

const Navbar = ({ logo, navLinks }) => {
  return (
    <nav className="flex justify-between w-full px-[211px] z-20 relative pt-[35px]">
      <Image src={logo} alt="logo" className="h-[74px] w-[172px]" />
      <ul className="flex font-semibold w-[192px] h-[22px] text-[18px] gap-[40px] text-[#A9A9A9] figtree-font">
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
