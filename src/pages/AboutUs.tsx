import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import { XIcon } from "lucide-react";
import { useState } from "react";

const AboutUs = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div>
      {/* Hero */}
      <div className="lg:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/about-us-hero-web.png')] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/about-us-hero.png')] p-8 bg-cover bg-center h-screen flex flex-col items-center justify-between text-white">
        <Header />
        <div className="flex flex-col gap-8">
          <h2 className="my-12 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl lg:w-1/2 font-bold tracking-wide self-start">
            We Build Your Dream House
          </h2>
          <div className="flex mt-8 mb-12 gap-2 self-end">
            <div className="h-1 w-7 bg-white/40 rounded-full"></div>
            <div className="h-1 w-7 bg-white/40 rounded-full"></div>
            <div className="h-1 w-7 bg-white/40 rounded-full"></div>
            <div className="h-1 w-7 bg-white/40 rounded-full"></div>
          </div>
        </div>
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
            <a
              href="/projects"
              className="border-b border-zinc-500 pb-3 md:pb-5"
            >
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

      {/* About Us */}
      <div className="bg-gradient-to-r from-[#E64237E5] to-[#CE3631]">
        <div className="bg-[url('/mobile-pattern.png')] bg-cover bg-no-repeat bg-center py-12">
          {/* Glassmorphism Card mobile & tablets*/}
          <div className="lg:hidden flex flex-col gap-7 border border-white/15 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15 text-white rounded-2xl mx-6 sm:mx-18 md:mx-24 p-8 sm:px-12">
            <h2 className="text-center text-white text-xl md:text-2xl">
              About Us
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
              turpis porttitor sed cras donec. Id ac molestie purus tincidunt in
              cras. Quis a lacus molestie praesent suspendisse ac tellus. Auctor
              tristique ultrices magna purus.
            </p>
            <hr />
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="md:text-lg">State</h2>
                <h2 className="text-2xl">79+</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="md:text-lg">Homes To Buy</h2>
                <h2 className="text-2xl">1082</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="md:text-lg">Agents</h2>
                <h2 className="text-2xl">219+</h2>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-5">
              <img
                src="/about-us-designer-heading.png"
                alt="heading"
                className=""
              />
              <div className="flex gap-2 sm:gap-8 mb-2 sm:items-center sm:justify-center">
                <img src="/MD-image.png" alt="" className="w-1/2 sm:w-2/5" />
                <p className="text-sm sm:w-[40%]">
                  Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                  turpis porttitor sed cras donec. Id ac molestie purus
                  tincidunt in cras. Quis a lacus molestie praesent suspendisse
                  ac tellus.
                </p>
              </div>
              <VideoPlayer
                thumbnailSrc="/video-frame.png"
                videoUrl="https://youtu.be/5hPtU8Jbpg0?si=VLbgJGtWoJBwby7I"
              />
            </div>
          </div>

          {/* Glassmorph Card Web */}
          <div className="hidden lg:flex flex-col border border-white/15 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15 text-white rounded-2xl mx-24 xl:mx-48 p-10">
            <div className="flex border-b">
              <div className="w-full flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">About Us</h2>
                <p className="text-sm leading-6 py-4">
                  Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                  turpis porttitor sed cras donec. Id ac molestie purus
                  tincidunt in cras. Quis a lacus molestie praesent suspendisse
                  ac tellus. Auctor tristique ultrices magna purus. Tortor in
                  pharetra enim ornare id porttitor. Purus nibh porta curabitur
                  id ullamcorper. Quis a lacus molestie praesent suspendisse ac
                  tellus. Auctor tristique ultrices magna purus. Tortor in
                  pharetra enim ornare id porttitor. Purus nibh porta curabitur
                  id ullamcorper.
                </p>
              </div>
              <div className="w-[170%] h-fit mt-auto">
                <img src="/about-us-image-1.png" alt="" className="" />
              </div>
            </div>
            <div className="relative flex items-center justify-between border-b">
              <img
                src="/about-us-image-2.png"
                alt=""
                className="w-[35%] absolute -left-10 bottom-0"
              />
              <div className="flex items-center justify-between gap-5 ml-auto py-4 w-[65%]">
                <div className="flex flex-col items-center justify-center gap-4">
                  <h2 className="md:text-lg">State</h2>
                  <h2 className="text-3xl font-semibold">79+</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <h2 className="md:text-lg">Homes To Buy</h2>
                  <h2 className="text-3xl font-semibold">1082</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <h2 className="md:text-lg">Agents</h2>
                  <h2 className="text-3xl font-semibold">219+</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center text-white mt-12 xl:px-16">
            <img
              src="/about-us-designer-heading.png"
              alt=""
              className="w-[70%] xl:w-[50%]"
            />
            <div className="flex items-start justify-center gap-6 xl:gap-10 w-fit">
              <div className="w-[30%] flex flex-col gap-3">
                <img
                  src="/MD-image.png"
                  alt=""
                  className="w-2/3 xl:w-[66%] ml-auto"
                />
                <div>
                  <h2 className="ml-auto xl:text-lg w-fit pr-5 xl:pr-8">
                    Prathamesh Gaikwad
                  </h2>
                  <h2 className="ml-auto xl:text-lg w-fit pr-5 xl:pr-8 italic">
                    MD, GAIKWAD CORP
                  </h2>
                </div>
              </div>
              <div className="w-[70%] ">
                <VideoPlayer
                  thumbnailSrc="/video-frame.png"
                  videoUrl="https://youtu.be/5hPtU8Jbpg0?si=VLbgJGtWoJBwby7I"
                />
                <p className="w-[88%] text-xs xl:text-sm mt-4 xl:px-3">
                  Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                  turpis porttitor sed cras donec. Id ac molestie purus
                  tincidunt in cras. Quis a lacus molestie praesent suspendisse
                  ac tellus. Auctor tristique ultrices magna purus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet The Team */}
      <div className="bg-[#EBEAEA] py-12">
        <div className="bg-[url('/mobile-pattern.png')] bg-cover bg-center bg-repeat">
          <h2 className="text-center text-xl font-medium">Meet The Team</h2>
          <div className="grid grid-cols-2 lg:flex items-center justify-center gap-4 sm:gap-8 p-8 sm:px-12 md:px-32 lg:px-12 xl:px-32 text-white">
            {/* Card-1 */}
            <div className="bg-[url('/meet-the-team-1.png')] bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[50vh] 2xl:h-[60vh] rounded-xl flex flex-col items-start justify-end pl-2 pb-2">
              {/* Name, Designation & Linkedin */}
              <div className="flex items-center gap-4">
                {/* Name and Designation */}
                <div className="text-nowrap flex flex-col">
                  <h2 className="text-xs lg:text-base font-semibold">
                    Jasmine Jasmine
                  </h2>
                  <h2 className="text-xs">Sales Head</h2>
                </div>
                {/* Linkedin */}
                <img
                  loading="lazy"
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  className="size-3 md:size-5"
                />
              </div>
              <p className="text-xs md:text-[14px] font-light leading-5">
                Lorem Ipsum is simply dummy text of the{" "}
              </p>
            </div>
            {/* Card-2 */}
            <div className="bg-[url('/meet-the-team-2.png')] bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[50vh] 2xl:h-[60vh] rounded-xl flex flex-col items-start justify-end pl-2 pb-2">
              {/* Name, Designation & Linkedin */}
              <div className="flex items-center gap-4">
                {/* Name and Designation */}
                <div className="text-nowrap flex flex-col">
                  <h2 className="text-xs lg:text-base font-semibold">
                    Jasmine Jasmine
                  </h2>
                  <h2 className="text-xs">Sales Head</h2>
                </div>
                {/* Linkedin */}
                <img
                  loading="lazy"
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  className="size-3 md:size-5"
                />
              </div>
              <p className="text-xs md:text-[14px] font-light leading-5">
                Lorem Ipsum is simply dummy text of the{" "}
              </p>
            </div>
            {/* Card-3 */}
            <div className="bg-[url('/meet-the-team-3.png')] bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[50vh] 2xl:h-[60vh] rounded-xl flex flex-col items-start justify-end pl-2 pb-2">
              {/* Name, Designation & Linkedin */}
              <div className="flex items-center gap-4">
                {/* Name and Designation */}
                <div className="text-nowrap flex flex-col">
                  <h2 className="text-xs lg:text-base font-semibold">
                    Jasmine Jasmine
                  </h2>
                  <h2 className="text-xs">Sales Head</h2>
                </div>
                {/* Linkedin */}
                <img
                  loading="lazy"
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  className="size-3 md:size-5"
                />
              </div>
              <p className="text-xs md:text-[14px] font-light leading-5">
                Lorem Ipsum is simply dummy text of the{" "}
              </p>
            </div>
            {/* Card-4 */}
            <div className="bg-[url('/meet-the-team-4.png')] bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[50vh] 2xl:h-[60vh] rounded-xl flex flex-col items-start justify-end pl-2 pb-2">
              {/* Name, Designation & Linkedin */}
              <div className="flex items-center gap-4">
                {/* Name and Designation */}
                <div className="text-nowrap flex flex-col">
                  <h2 className="text-xs lg:text-base font-semibold">
                    Jasmine Jasmine
                  </h2>
                  <h2 className="text-xs">Sales Head</h2>
                </div>
                {/* Linkedin */}
                <img
                  loading="lazy"
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  className="size-3 md:size-5"
                />
              </div>
              <p className="text-xs md:text-[14px] font-light leading-5">
                Lorem Ipsum is simply dummy text of the{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between px-8 sm:px-12 md:px-32 lg:px-12 xl:px-32">
            <div className="flex">
              <div className="w-[20vw] h-1 bg-blue-950" />
              <div className="w-[20vw] h-1 bg-zinc-300" />
            </div>
            <div className="flex items-center justify-end gap-1">
              <img
                src="/icons/chevron-left.png"
                alt="chevron-left"
                className="w-1/5"
              />
              <img
                src="/icons/chevron-right.png"
                alt="chevron-left"
                className="w-1/5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Values */}
      <div className="">
        <div>
          <img src="/our-core-values.png" alt="" className="hidden lg:block"/>
          <img src="/our-core-values-mobile.png" alt="" className="lg:hidden"/>
        </div>
      </div>

      {/* Our partners */}
      <div>
        <img src="/our-patners-mobile.png" alt="" className='lg:hidden'/>
        <img src="/our-patners.png" alt="" className='hidden lg:block'/>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default AboutUs;
