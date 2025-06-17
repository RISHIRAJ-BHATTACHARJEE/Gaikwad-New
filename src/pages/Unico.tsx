import { useState } from "react";
import Header from "../components/Header";
import { XIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import Plans from "@/components/Plans";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs-gallery";
import Footer from "@/components/Footer";
import Landmark from "@/components/Landmark";

const Unico = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [view, setView] = useState("dynamic");

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/uniqo-hero-mobile.png')] lg:bg-[linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)),url('/uniqo-web.png')] bg-cover bg-no-repeat bg-center h-screen montserrat-regular flex flex-col py-12">
        {/* Navbar */}
        <Header />

        {/* Spacer to push the contents ti the bottom */}
        <div className="flex-grow lg:hidden" />

        {/* Hero Texts Mobile*/}
        <div className="lg:hidden flex flex-col items-center justify-end pb-12">
          {/* Heading */}
          <h2 className="text-4xl text-white uppercase font-medium">
            lorem ipsum
          </h2>
          {/* Paragraph */}
          <p className="text-sm leading-7 text-center text-white px-4">
            Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
            turpis porttitor sed cras donec. Id ac molestie purus tincidunt in
            cras.
          </p>
          {/* RERA No. & Certificate */}
          <div className="flex items-center gap-3">
            {/* Rera No */}
            <div className="flex flex-col leading-2">
              <h2 className="text-white font-semibold text-xl">
                RERA No. XXXX XXXX XX
              </h2>
              <p className="text-xs flex items-center text-white">
                View RERA Certificate{" "}
                <img src="/icons/maki_arrow.png" alt="" className="size-4" />
              </p>
            </div>
            {/* QR Code */}
            <img src="/icons/qr-code.png" className="size-8" />
          </div>
        </div>

        {/* Hero texts web */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-10 pt-12">
          {/* Heading */}
          <div className="relative">
            <h2 className="text-6xl text-white uppercase">lorem ipsum</h2>
            <div className="flex items-center gap-3">
              {/* Rera No */}
              <div className="absolute flex flex-col leading-2 -right-[17rem] top-0">
                <h2 className="text-white font-semibold text-xl">
                  RERA No. XXXX XXXX XX
                </h2>
                <p className="text-xs flex items-center text-white">
                  View RERA Certificate{" "}
                  <img src="/icons/maki_arrow.png" alt="" className="size-4" />
                </p>
              </div>
              {/* QR Code */}
              <img
                src="/icons/qr-code.png"
                className="size-20 absolute -right-[23rem] top-1.5"
              />
            </div>
          </div>
          {/* Paragraph */}
          <p className="leading-7 text-center text-white px-4 w-[80%]">
            Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
            turpis porttitor sed cras donec. Id ac molestie purus tincidunt in
            cras.
          </p>
        </div>

        {/* Icons */}
        <div className="absolute flex flex-col gap-3 bottom-6 right-2">
          <img
            src="/icons/uniqo-hero-call.png"
            alt=""
            className="w-8 lg:hidden"
          />
          <img
            src="/icons/instant-callback.png"
            alt=""
            className="hidden lg:block w-12"
          />
          <img src="/icons/uniqo-whatsapp.png" alt="" className="w-8 lg:w-12" />
        </div>

        {/* Mobile Menu Panel */}
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
          <ul className="mx-6 -mt-2 flex flex-col gap-6 md:gap-8 text-xl md:text-2xl">
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
            <a href="/blogs" className="border-b border-zinc-500 pb-3 md:pb-5">
              Enquire Now
            </a>
            <a href="/" className="border-b border-zinc-500 pb-3 md:pb-5">
              Contact Us
            </a>
          </ul>
        </div>
      </div>

      {/* Description */}
      <div>
        <img src="/description.png" alt="" />
      </div>

      {/* Price Breakup */}
      <div className="bg-[#17262A] text-white bg-[url('/mobile-pattern.png')] bg-repeat bg-bottom flex flex-col items-center justify-center montserrat-regular p-[20px] gap-6 lg:py-12">
        <h2 className="text-xl lg:text-2xl uppercase text-center">
          Price Breakup
        </h2>
        {/* Tabs Toggle View */}
        <div className="border w-fit rounded-full">
          <button
            onClick={() => setView("dynamic")}
            className={`px-3 py-2 text-sm rounded-l-full ${
              view === "dynamic" ? "bg-[#E74238]" : "bg-transparent"
            }`}
          >
            Dynamic View
          </button>
          <button
            onClick={() => setView("unified")}
            className={`px-3 py-2 text-sm rounded-r-full ${
              view === "unified" ? "bg-[#E74238]" : "bg-transparent"
            }`}
          >
            Unified View
          </button>
        </div>

        {/* Conditional Rendering */}
        {view === "dynamic" ? (
          <>
            <div className="border 2xl:p-[40px] xl:p-[20px] flex flex-col gap-4 lg:gap-8 rounded-3xl w-[90%] lg:w-fit">
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Tile-1 */}
                <div className="flex flex-col gap-2 lg:gap-4 lg:items-center lg:justify-center">
                  <h2 className="text-lg uppercase font-medium">
                    3bhk optimax
                  </h2>
                  <p className="text-sm text-zinc-400">Carpet area: 790sqft</p>
                  <p className="text-sm text-zinc-400">
                    Starting from 1.2CR onwards
                  </p>
                  <button className="w-full bg-[#E74238] text-white text-xs lg:text-sm rounded-full lg:rounded-lg px-3 lg:px-4 py-1.5 lg:py-2">
                    Download Brochure
                  </button>
                </div>
                {/* Tile-2 */}
                <div className="flex flex-col gap-2 lg:gap-4 lg:items-center lg:justify-center">
                  <h2 className="text-lg uppercase font-medium">
                    3bhk optimax
                  </h2>
                  <p className="text-sm text-zinc-400">Carpet area: 790sqft</p>
                  <p className="text-sm text-zinc-400">
                    Starting from 1.2CR onwards
                  </p>
                  <button className="w-full bg-[#E74238] text-white text-xs lg:text-sm rounded-full lg:rounded-lg px-3 lg:px-4 py-1.5 lg:py-2">
                    Download Brochure
                  </button>
                </div>
                {/* Tile-3 */}
                <div className="flex flex-col gap-2 lg:gap-4 lg:items-center lg:justify-center">
                  <h2 className="text-lg uppercase font-medium">
                    3bhk optimax
                  </h2>
                  <p className="text-sm text-zinc-400">Carpet area: 790sqft</p>
                  <p className="text-sm text-zinc-400">
                    Starting from 1.2CR onwards
                  </p>
                  <button className="w-full bg-[#E74238] text-white text-xs lg:text-sm rounded-full lg:rounded-lg px-3 lg:px-4 py-1.5 lg:py-2">
                    Download Brochure
                  </button>
                </div>
                {/* Tile-4 */}
                <div className="flex flex-col gap-2 lg:gap-4 lg:items-center lg:justify-center">
                  <h2 className="text-lg uppercase font-medium">
                    3bhk optimax
                  </h2>
                  <p className="text-sm text-zinc-400">Carpet area: 790sqft</p>
                  <p className="text-sm text-zinc-400">
                    Starting from 1.2CR onwards
                  </p>
                  <button className="w-full bg-[#E74238] text-white text-xs lg:text-sm rounded-full lg:rounded-lg px-3 lg:px-4 py-1.5 lg:py-2">
                    Download Brochure
                  </button>
                </div>
              </div>

              <button className="hidden lg:block w-fit mx-auto bg-[#E74238] text-white text-xs lg:text-sm rounded-full lg:rounded-lg px-3 lg:px-4 py-1.5 lg:py-2">
                Download Master Brochure
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Select */}
            <Select>
              <SelectTrigger className="w-[260px] bg-white text-[#E64237]! text-lg border-[1.7px] border-[#E64237] rounded-xl">
                <SelectValue placeholder="OPTIMAX PLUS" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Building</SelectLabel>
                  <SelectItem value="apple">OPTIMAX PLUS</SelectItem>
                  <SelectItem value="apple">OPTIMAX PLUS</SelectItem>
                  <SelectItem value="apple">OPTIMAX PLUS</SelectItem>
                  <SelectItem value="apple">OPTIMAX PLUS</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="border p-[20px] flex flex-col gap-4 rounded-3xl w-[90%] bg-white">
              <h2 className="text-[#E64237] text-xl text-center font-medium">
                DESIGNED TO BREATHE
              </h2>
              <p className="text-[#24343B]">
                Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                turpis porttitor sed cras donec.
              </p>
              {/* Features */}
              <div className="flex gap-4">
                <h2 className="text-sm text-[#24343B] font-semibold">
                  3{" "}
                  <span className="italic text-[#E64237] font-normal">BHK</span>
                </h2>
                <h2 className="text-sm border-x-2 text-[#24343B] border-x-red-500 px-3">
                  <span className="font-semibold">900</span> sq.ft
                </h2>
                <h2 className="text-sm text-[#24343B]">
                  <span className="font-semibold">1.2 Cr</span> onwards
                </h2>
              </div>
              {/* unit plan */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#24343B] text-xl font-medium">
                    UNIT PLAN
                  </h2>
                  <button className="bg-[#E74238] text-white text-[10px] rounded-full px-2 py-1 mr-3">
                    Price Breakup
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="/uniqo-unit-plan.png" alt="" />
                  <div className="flex gap-3">
                    <img
                      src="/icons/comp-proj-left-arrow-black.png"
                      alt=""
                      className="w-12"
                    />
                    <img
                      src="/icons/comp-proj-right-arrow-black.png"
                      alt=""
                      className="w-12"
                    />
                  </div>
                </div>
              </div>
              {/* CTA Buttons */}
              <button className="bg-[#E74238] text-white text-sm rounded-full px-5 py-2 w-fit mx-auto">
                View & Download
              </button>
              <button className="bg-[#E74238] text-white text-sm rounded-full px-3 py-2">
                Download Master PLan & Pricing
              </button>
            </div>
          </>
        )}
      </div>

      {/* Plans */}
      <Plans />

      {/* things-that-matter */}
      <div>
        <img src="/things-that-matter.png" alt="" />
      </div>

      {/* Amenities */}
      <div className="bg-[url('/gaikwad-pattern-red-white.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center montserrat-regular py-12">
        <img
          src="/amenities-designer-headings.png"
          alt="gallery-designer-headings"
          className="w-[50%]"
        />
        {/* Carousels */}
        <div className="flex gap-12  mx-24 w-[66.5%]">
          <div className=" flex flex-col gap-3">
            <h2 className="text-xl font-semibold ">Swimming Pool</h2>
            <img
              src="/amenities.png"
              alt="amenities-swimmingpool"
              className="ml-auto"
            />
            <div className="flex items-center justify-center gap-3 ">
              <img
                src="icons/comp-proj-left-arrow-black.png"
                alt=""
                className="w-18"
              />
              <img
                src="icons/comp-proj-right-arrow-black.png"
                alt=""
                className="w-18"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl">Take a look</h2>
            <img src="/amenities-video.png" alt="" className="" />
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-[url('/gaikwad-pattern-red-white.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-12 montserrat-regular py-12">
        <img
          src="/gallery-designer-headings.png"
          alt="gallery-designer-headings"
          className="w-[50%]"
        />
        {/* Tabs */}
        <div>
          <Tabs defaultValue="account" className="">
            <TabsList>
              <TabsTrigger className="text-base lg:text-lg xl:text-xl" value="interior">Interior</TabsTrigger>
              <TabsTrigger className="text-base lg:text-lg xl:text-xl" value="exterior">Exterior</TabsTrigger>
              <TabsTrigger className="text-base lg:text-lg xl:text-xl" value="amenities">Amenities</TabsTrigger>
              <TabsTrigger className="text-base lg:text-lg xl:text-xl" value="specifications">Specifications</TabsTrigger>
              <TabsTrigger className="text-base lg:text-lg xl:text-xl" value="thedesigneredit">
                The Designer Edit
              </TabsTrigger>
            </TabsList>
            <TabsContent value="interior">
            </TabsContent>
            <TabsContent value="exterior">
            </TabsContent>
            <TabsContent value="amenities">
            </TabsContent>
            <TabsContent value="specifications">
            </TabsContent>
            <TabsContent value="thedesigneredit">
            </TabsContent>
          </Tabs>
        </div>
        {/* Carousel */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center justify-center">
            <img
              src="/img-1-gallery.png"
              alt="gallery-carousel"
              className="w-1/4"
            />
            <img
              src="/img-2-gallery.png"
              alt="gallery-carousel"
              className="w-1/4"
            />
          </div>
          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 ">
            <img
              src="icons/comp-proj-left-arrow-black.png"
              alt=""
              className="w-18"
            />
            <img
              src="icons/comp-proj-right-arrow-black.png"
              alt=""
              className="w-18"
            />
          </div>
        </div>
      </div>

      {/* Accordion & Maps */}
        <Landmark/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Unico;
