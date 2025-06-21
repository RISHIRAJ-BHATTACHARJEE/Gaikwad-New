import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageController from "@/components/ImageController";
import { useState } from "react";

const images = [
  "live-project-1.png",
  "/live-project.jpg",
  "/image-2.png",
  "/image-1.png",
  "/live-project.jpg",
  "/image-2.png",
];

interface Project {
  name: string;
  reraNo: string;
  bedrooms: string;
  bathrooms: string;
  size: string;
  floors: number;
  units: number;
  sold: number;
  description: string;
}

const projects: Project[] = [
  {
    name: "Shivirth",
    reraNo: "XXXX XXXX XX",
    bedrooms: "6BA",
    bathrooms: "6BA",
    size: "3960 sqft",
    floors: 12,
    units: 80,
    sold: 80,
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec.",
  },
  {
    name: "Nirvanas",
    reraNo: "XXXX XXXX XX",
    bedrooms: "6BA",
    bathrooms: "6BA",
    size: "3960 sqft",
    floors: 12,
    units: 80,
    sold: 80,
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec.",
  },
  {
    name: "Icon Towers",
    reraNo: "XXXX XXXX XX",
    bedrooms: "6BA",
    bathrooms: "6BA",
    size: "3960 sqft",
    floors: 12,
    units: 80,
    sold: 80,
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec.",
  },
  {
    name: "Gaikwad Miro",
    reraNo: "XXXX XXXX XX",
    bedrooms: "6BA",
    bathrooms: "6BA",
    size: "3960 sqft",
    floors: 12,
    units: 80,
    sold: 80,
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec.",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-gradient-to-r from-[#24343B] to-[#17262A]">
      <div className="bg-[url('/unico-pattern-black.png')] bg-cover bg-center bg-repeat">
        <Header />
        <h2 className="text-white font-semibold text-xl text-center">
          Live Projects
        </h2>
        {/* Live Project Card */}
        <div className="lg:flex items-center justify-center lg:gap-7 xl:gap-10 border border-white/1 backdrop-blur-[50px] shadow-[0px_16.54px_33.09px_0px_#0000001A] bg-white/15 p-6 sm:p-10 md:p-12 lg:p-6 xl:px-24 xl:pt-12 2xl:px-32 rounded-3xl mx-6 sm:mx-18 md:mx-24 2xl:mx-42 mt-6">
          {/* Images */}
          <div className="lg:w-[50%] flex flex-col items-center justify-center">
            <img
              src={images[current]}
              alt=""
              className="aspect-video w-full  2xl:w-[94%] h-[220px] lg:h-[60%] 2xl:h-[312px] object-cover rounded-xl"
            />
            <ImageController
              current={current}
              setCurrent={setCurrent}
              images={images}
            />
          </div>
          {/* Texts */}
          <div className="text-white flex flex-col gap-4 sm:gap-6 lg:gap-3.5 2xl:gap-5">
            {/* 1st Heading */}
            <div className="flex items-center gap-6 md:gap-12">
              <h2 className="font-semibold text-lg md:text-xl lg:text-xl 2xl:text-2xl">
                ABC
              </h2>
              <h2 className="md:text-xl lg:text-base 2xl:text-xl">
                RERA No: XXXX XXXX XX
              </h2>
            </div>
            {/* 2nd Line */}
            <div className="flex items-center justify-between 2xl:justify-start 2xl:gap-18 font-extralight">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/double-bed.png"
                  alt="icon-1"
                  className="size-6 md:size-8 lg:size-6"
                />
                <p className="md:text-xl lg:text-base md:font-medium">6BA</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/bath-tub.png"
                  alt="icon-1"
                  className="size-6 md:size-8 lg:size-6"
                />
                <p className="md:text-xl lg:text-base md:font-medium">6BA</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/floorplan.png"
                  alt="icon-1"
                  className="size-5 md:size-8 lg:size-5"
                />
                <p className="md:text-xl lg:text-base md:font-medium">
                  3960 sqft
                </p>
              </div>
            </div>
            {/* 3rd Line */}
            <div>
              <p className="font-extralight text-sm md:text-lg lg:text-sm italic 2xl:tracking-wide">
                Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                turpis porttitor sed cras donec. Id ac molestie purus tincidunt
                in cras. Lorem ipsum dolor sit amet consectetur. Ac consequat at
                nec id turpis porttitor sed cras donec.
                <button className="hidden xl:block bg-white text-black font-medium px-5 py-2 rounded-xl mt-3 text-sm">
                  Read More
                </button>
              </p>
            </div>
            {/* 4th Line */}
            <div className="flex items-center -mx-6 2xl:mx-0 2xl:w-fit 2xl:gap-12">
              {/* Floors */}
              <div className="text-center border-r-1 w-full flex flex-col gap-2 2xl:px-6">
                <h2 className="font-extralight tracking-wider text-sm md:text-xl lg:text-lg">
                  Floors
                </h2>
                <h2 className="text-lg md:text-xl lg:text-lg">12</h2>
              </div>
              {/* Units */}
              <div className="text-center border-r-1 w-full flex flex-col gap-2 2xl:px-6">
                <h2 className="font-extralight tracking-wider text-sm md:text-xl lg:text-lg">
                  Units
                </h2>
                <h2 className="text-lg md:text-xl lg:text-lg">80</h2>
              </div>
              {/* Booked */}
              <div className="text-center w-full flex flex-col gap-2 2xl:px-6">
                <h2 className="font-extralight tracking-wider text-sm md:text-xl lg:text-lg">
                  Booked
                </h2>
                <h2 className="text-lg md:text-xl lg:text-lg">80</h2>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-3 md:gap-5">
              <div className="flex items-center justify-between lg:gap-3">
                <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-lg! flex items-center gap-2 text-[13px] sm:text-base text-nowrap md:text-lg lg:text-base">
                  <img
                    src="/icons/google-maps.png"
                    alt="google-map"
                    className="w-3 sm:w-4 md:w-5 lg:w-4"
                  />
                  Google Maps
                </button>
                <button className="bg-white text-black text-[13px] sm:text-base px-3 sm:px-4 py-2 md:text-lg lg:text-base text-nowrap rounded-lg!">
                  Download Brochure
                </button>
              </div>
              <button className="bg-[#E64237] rounded-lg py-2 md:text-lg lg:text-base">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="pt-6 pb-12">
          <h2 className="text-lg text-center font-semibold text-white py-6">
            Completed Projects
          </h2>

          {/* Card */}
          <div className="border border-white/1 backdrop-blur-[50px] shadow-[0px_16.54px_33.09px_0px_#0000001A] bg-white/15 p-6 sm:p-10 md:p-12 lg:p-6 xl:px-24 xl:pt-12 2xl:px-32 rounded-3xl mx-6 sm:mx-18 md:mx-24 2xl:mx-42 mt-6">
            {projects.map((item, index) => {
              return (
                <>
                  <CompletedProjects
                    current={current}
                    setCurrent={setCurrent}
                    images={images}
                    project={item}
                    key={index}
                  />
                  {index < projects.length - 1 && <div className="my-12 lg:my-6 border border-zinc-400" />}
                </>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default Projects;

const CompletedProjects = ({
  current,
  setCurrent,
  images,
  project,
}: {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  images: string[];
  project: Project;
}) => {
  return (
    <div className="lg:flex items-center justify-center lg:gap-7 xl:gap-10">
      {/* Images */}
      <div className="lg:w-[50%] flex flex-col items-center justify-center">
        <img
          src={images[current]}
          alt=""
          className="aspect-video w-full  2xl:w-[94%] h-[220px] lg:h-[60%] 2xl:h-[312px] object-cover rounded-xl"
        />
        <ImageController
          current={current}
          setCurrent={setCurrent}
          images={images}
        />
      </div>
      {/* Texts */}
      <div className="text-white flex flex-col gap-4 sm:gap-6 lg:gap-3.5 2xl:gap-5">
        {/* 1st Heading */}
        <div className="flex flex-col lg:flex-row items-start gap-3 md:gap-12">
          <h2 className="font-semibold text-lg md:text-xl lg:text-xl 2xl:text-2xl">
            {project.name}
          </h2>
          <h2 className="md:text-xl lg:text-base 2xl:text-xl">
            RERA No:{project.reraNo}
          </h2>
        </div>
        {/* 2nd Line */}
        <div className="flex items-center justify-between 2xl:justify-start 2xl:gap-18 font-extralight">
          <div className="flex items-center gap-2">
            <img
              src="/icons/double-bed.png"
              alt="icon-1"
              className="size-6 md:size-8 lg:size-6"
            />
            <p className="md:text-xl lg:text-base md:font-medium">
              {project.bedrooms}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/icons/bath-tub.png"
              alt="icon-1"
              className="size-6 md:size-8 lg:size-6"
            />
            <p className="md:text-xl lg:text-base md:font-medium">
              {project.bathrooms}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/icons/floorplan.png"
              alt="icon-1"
              className="size-5 md:size-8 lg:size-5"
            />
            <p className="md:text-xl lg:text-base md:font-medium">
              {project.size}
            </p>
          </div>
        </div>
        {/* 3rd Line */}
        <div>
          <p className="font-extralight text-sm md:text-lg lg:text-sm italic 2xl:tracking-wide">
            {project.description}
            <button className="hidden xl:block bg-white text-black font-medium px-5 py-2 rounded-xl mt-3 text-sm">
              Read More
            </button>
          </p>
        </div>
        {/* 4th Line */}
        <div className="flex items-center -mx-6 2xl:mx-0 2xl:w-fit 2xl:gap-12">
          {/* Floors */}
          <div className="text-center border-r-1 w-full flex flex-col gap-2 2xl:px-6">
            <h2 className="font-extralight tracking-wider text-sm md:text-xl lg:text-lg">
              Floors
            </h2>
            <h2 className="text-lg md:text-xl lg:text-lg">{project.floors}</h2>
          </div>
          {/* Units */}
          <div className="text-center border-r-1 w-full flex flex-col gap-2 2xl:px-6">
            <h2 className="font-extralight tracking-wider text-sm md:text-xl lg:text-lg">
              Units
            </h2>
            <h2 className="text-lg md:text-xl lg:text-lg">{project.units}</h2>
          </div>
          {/* Sold */}
          <div className="text-center w-full flex flex-col gap-2 2xl:px-6">
            <h2 className="font-extralight tracking-wider text-sm md:text-xl lg:text-lg">
              Sold
            </h2>
            <h2 className="text-lg md:text-xl lg:text-lg">{project.sold}</h2>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex w-full">
          {/* Project Reviews */}
          <div className="flex flex-col items-center justify-between w-full border-r">
            <h2 className="w-fit">Project Reviews</h2>
            <button className="bg-white w-[70%] rounded-lg p-1">
              <img src="/icons/google.png" alt="" className="" />
            </button>
          </div>
          {/* Project Location */}
          <div className="flex flex-col items-center justify-between w-full border-l">
            <h2 className="">Project Location</h2>
            <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-lg! flex items-center gap-2 text-[13px] sm:text-base text-nowrap md:text-lg lg:text-base">
              <img
                src="/icons/google-maps.png"
                alt="google-map"
                className="w-3 sm:w-4 md:w-5 lg:w-4"
              />
              Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
