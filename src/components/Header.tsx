import { Phone } from "lucide-react";

const Header = () => {
  return (
    <div className="text-white flex items-center justify-between px-24">
      <img src="/logo.png" alt="logo" className="w-1/10 xl:w-1/8" />
      {/* Nav Links */}
      <ul className="flex gap-8 text-lg">
        <a className="hover:text-[#CE3631] cursor-pointer">Home</a>
        <a className="hover:text-[#CE3631] cursor-pointer">About Us</a>
        <a className="hover:text-[#CE3631] cursor-pointer">Career</a>
        <a className="hover:text-[#CE3631] cursor-pointer">Projects</a>
        <a href="/unico" className="hover:text-[#CE3631] cursor-pointer">Unico</a>
        <a className="hover:text-[#CE3631] cursor-pointer">Blogs</a>
      </ul>
      <button className="flex items-center gap-2 bg-[#CE3631] px-3 py-2 rounded-xl font-light">
        <Phone fill="#ffffff" size={20} />
         Contact Us
      </button>
    </div>
  );
};

export default Header;
