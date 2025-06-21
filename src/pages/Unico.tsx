import Header from "@/components/Header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const flats = [
  {
    name: "3bhk optimax",
    carpetArea: 790,
  },
  {
    name: "3bhk optilux",
    carpetArea: 1199 - 1201,
  },
  {
    name: "3bhk optimax plus",
    carpetArea: 1100,
  },
  {
    name: "commercial shops",
    carpetArea: 500,
  },
];

const Unico = () => {
  const [view, setView] = useState("dynamic");

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/uniqo-hero-mobile.png')] lg:bg-[linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)),url('/uniqo-web.png')] bg-cover bg-repeat bg-center h-screen montserrat-regular flex flex-col">
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
        <div className="hidden lg:flex flex-col items-center justify-center gap-10">
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
                className="size-10 absolute -right-[20rem] top-1.5"
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
      </div>

      {/* Description */}
      <div className="montserrat-regular p-[20px]">
        <div className="bg-[url('/gaikwad-pattern-red-white.png')] bg-cover bg-repeat bg-center">
          <h2 className="text-center uppercase text-xl font-medium">
            Description
          </h2>

          {/* Mobile & Tabs */}
          <div className="lg:hidden flex flex-col gap-6 py-8 sm:px-12">
            <p className="text-sm md:mx-24">
              Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
              turpis porttitor sed cras donec. Id ac molestie purus tincidunt in
              cras. Quis a lacus molestie praesent suspendisse ac tellus. Auctor
              tristique ultrices magna purus.
            </p>

            <div className="flex flex-col gap-4 md:mx-24">
              <h2 className="text-lg font-medium">Configuration</h2>
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                {flats.map((flat) => (
                  <Flats name={flat.name} carpetArea={flat.carpetArea} />
                ))}
              </div>
              <button className="bg-[#E74238] text-white px-4 py-2 rounded-full text-nowrap">
                Get In Touch
              </button>
            </div>

            <img
              src="/uniqo-building.png"
              alt="uniqo-building"
              className="mx-8 sm:w-1/2 sm:mx-auto"
            />
          </div>

          {/* Web */}
          <div className="hidden lg:flex mx-24 gap-8 py-12 justify-center items-stretch">
            {/* Image column */}
            <div className="w-[40%] lg:w-[30%] xl:w-[20%] flex items-center">
              <img
                src="/uniqo-building.png"
                alt="uniqo-building"
                className="w-full h-auto max-h-full object-contain"
              />
            </div>

            {/* Text column */}
            <div className="w-[50%] flex flex-col justify-between">
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                turpis porttitor sed cras donec. Id ac molestie purus tincidunt
                in cras. Quis a lacus molestie praesent suspendisse ac tellus.
                Auctor tristique ultrices magna purus.
              </p>

              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-medium">Configuration</h2>

                <div className="grid grid-cols-2 gap-4">
                  {flats.map((flat, index) => (
                    <Flats
                      key={index}
                      name={flat.name}
                      carpetArea={flat.carpetArea}
                    />
                  ))}
                </div>

                <button className="bg-[#E74238] text-white px-4 py-2 rounded-full text-nowrap lg:mr-12 mt-4">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Breakup */}
      <div className="bg-[#17262A] text-white bg-[url('/mobile-pattern.png')] bg-[length:510px_510px] bg-repeat bg-bottom flex flex-col items-center justify-center montserrat-regular p-[20px] gap-6 lg:py-12">
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
            <div className="border p-[20px] flex flex-col gap-4 lg:gap-8 rounded-3xl w-[90%] lg:w-fit">
              <div className="flex flex-col lg:flex-row gap-4">
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
    </div>
  );
};

export default Unico;

const Flats = ({ name, carpetArea }: { name: string; carpetArea: number }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="uppercase font-semibold">{name}</h2>
      <p className="text-xs">Carpet area: {carpetArea} sqft</p>
      <button className="bg-[#E74238] text-white px-4 py-2 rounded-full text-xs w-fit text-nowrap">
        Download Brochure
      </button>
    </div>
  );
};
