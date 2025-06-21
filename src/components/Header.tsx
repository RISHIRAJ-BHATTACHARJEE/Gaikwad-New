import { AlignRight, Phone, XIcon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="flex items-center justify-between py-8 px-3 sm:px-8 md:px-12 2xl:px-12 text-white">
      <img src="/logo.png" alt="" className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-2/10 2xl:w-1/7" />
      <AlignRight onClick={togglePanel} className="text-white lg:hidden" />
      <ul className="hidden lg:flex gap-3 mx-auto xl:text-lg xl:gap-6 lg:gap-6">
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

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-[24rem] bg-black text-white transition-transform duration-300 ease-in-out z-10 ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <XIcon
            className="cursor-pointer m-4 size-8 md:size-12"
            strokeWidth={1}
            onClick={togglePanel}
          />
        </div>
        <ul className="mx-6 mt-6 flex flex-col gap-6 md:gap-8 text-xl md:text-2xl">
          <a href="/" className="border-b border-zinc-500 pb-3 md:pb-5">
            Home
          </a>
          <a href="/about" className="border-b border-zinc-500 pb-3 md:pb-5">
            About Us
          </a>
          <a href="/career" className="border-b border-zinc-500 pb-3 md:pb-5">
            Career
          </a>
          <a href="/projects" className="border-b border-zinc-500 pb-3 md:pb-5">
            Projects
          </a>
          <a href="#" className="border-b border-zinc-500 pb-3 md:pb-5">
            3d Tour
          </a>
          <a href="/blogs" className="border-b border-zinc-500 pb-3 md:pb-5">
            Blogs
          </a>
          <a href="/" className="border-b border-zinc-500 pb-3 md:pb-5">
            Newsletter
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
