import { AlignRight, Phone } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-8 px-3 sm:px-8 md:px-12 2xl:px-12 text-white">
      <img src="/logo.png" alt="" className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-2/10 2xl:w-1/7" />
      <AlignRight className="text-white lg:hidden" />
      <ul className="hidden lg:flex gap-3 mx-auto xl:text-lg xl:gap-6">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/career">Career</a>
        <a href="/projects">Projects</a>
        <a href="/unico">Unico</a>
        <a href="/blogs">Blogs</a>
      </ul>

      <button className="hidden lg:flex items-center gap-2 bg-[#CE3631] px-3 py-2 rounded-xl">
        <Phone fill="#ffffff" stroke="none"/>
        Contact Us
      </button>
    </div>
  );
};

export default Header;
