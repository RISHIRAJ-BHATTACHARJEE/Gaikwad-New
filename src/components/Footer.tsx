import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#17262A] p-6 text-white md:flex md:flex-col md:gap-4 lg:items-center lg:justify-between lg:p-18">
      <div className="lg:flex">
        <div>
           <img loading="lazy"
            src="/logo.png"
            alt="logo"
            className="w-48 md:w-62 lg:w-52"
          />
          {/* Logos */}
          <div className="flex gap-3 lg:gap-5 py-7">
             <img loading="lazy"
              src="/icons/instagram.png"
              alt="instagram"
              className="w-4 lg:w-6 ml-2"
            />
             <img loading="lazy"
              src="/icons/facebook.png"
              alt="facebook"
              className="w-4 lg:w-6"
            />
             <img loading="lazy"
              src="/icons/telegram.png"
              alt="telegram"
              className="w-4 lg:w-6"
            />
             <img loading="lazy" src="/icons/x.png" alt="x" className="w-4 lg:w-6" />
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col justify-between gap-4">
          <ul className="ml-2 flex flex-col md:flex-row gap-5 md:gap-8 text-lg">
            <li>Home</li>
            <li>About Us</li>
            <li>Career</li>
            <li>Projects</li>
            <li>Unico</li>
            <li>Blogs</li>
            <li>Newsletter</li>
          </ul>
          <div className="hidden lg:block ">
            <div className=" w-fit ml-auto">
              <p className="text-sm ml-2 py-6 font-light">
                Sign up for exclusive offers & news
              </p>
              <div className="flex border-b w-fit pb-2 ml-2 text-right">
                <input type="text" placeholder="Enter Email" />
                <ArrowRight strokeWidth={1} className="text-white" />
              </div>
            </div>
            <h2 className="text-center text-[#808080] lg:w-fit lg:p-0 lg:mt-10 lg:text-sm px-10 w-fit md:w-full md:text-xl leading-7 pt-12">
              COPYRIGHT 2025 REAL ESTATE ALL RIGHTS RESERVED
            </h2>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <p className="text-sm ml-2 py-6 font-light">
          Sign up for exclusive offers & news
        </p>
        <div className="flex border-b w-fit pb-2 ml-2">
          <input type="text" placeholder="Enter Email" />
          <ArrowRight strokeWidth={1} className="text-white" />
        </div>
        <h2 className="text-center text-[#808080] px-10 w-fit md:w-full md:text-xl leading-7 pt-12">
          COPYRIGHT 2025 REAL ESTATE ALL RIGHTS RESERVED
        </h2>
      </div>
    </div>
  );
};

export default Footer;
