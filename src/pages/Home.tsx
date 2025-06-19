import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageController from "@/components/ImageController";
import { InstagramCarousel } from "@/components/instagram-carousel";
import { ReviewCarousel } from "@/components/review-carousel";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";

const images = [
  "live-project-1.png",
  "/live-project.jpg",
  "/image-2.png",
  "/image-1.png",
  "/live-project.jpg",
  "/image-2.png",
];

const amenitiesImages = [
  "/swimming-pool.png",
  "/live-project-mobile.png",
  "/image-1.png",
  "/completed-projects-1.png",
];

const reviewSlides = [
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-2",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-1",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-3",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-2",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-1",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed dolor bibendum. Quis vel neque nulla elementum vitae blandit tempor accumsan. Massa rhoncus risus egestas sed proin. Amet id urna egestas risus pharetra justo. Eget sit gravida in iaculis vestibulum at risus. Eu facilisis placerat nisl viverra vitae quam. Fusce eget in parturient aliquam ullamcorper eu adipiscing cursus. Lectus mauris vitae imperdiet enim.",
    bgImage: "review-bg-3",
    profileImage: "review-avatar.png",
    name: "Ricardo",
    designation: "Businessman",
    rating: 5,
  },
];

const highlights = [
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const articles = [
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the left arrow click (previous image)
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle the right arrow click (next image)
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* Hero */}
      <div className="bg-[url('/hero-bg-mobile.png')] lg:bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center">
        <div className="bg-[#0C1C20] text-white flex flex-col items-center justify-center mx-3 mt-6 sm:mx-8 sm:mt-12 md:mx-12 md:mt-16 ">
          <Header />
          <h2 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[7rem] xl:translate-y-12 2xl:text-9xl font-medium 2xl:font-semibold text-center">
            Dream Estate
          </h2>
          <div className="relative flex items-center justify-center">
            <div className="hidden lg:flex flex-col gap-4 py-8 absolute top-6 left-14 xl:left-4 xl:top-30 2xl:-left-30">
              <p className="text-xs md:w-[60%] lg:w-[40%] 2xl:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text
              </p>
              <button className="text-sm bg-white w-fit text-black px-3 py-2 rounded-lg">
                Discover More
              </button>
            </div>

            <img
              src="/1.png"
              alt=""
              className="w-[80%] 2xl:w-[90%] xl:translate-x-20"
            />

            {/* Avatars */}
            <div className="absolute w-[35%] md:w-[20%] -right-2 md:right-13 top-7 md:top-18 xl:right-0 xl:top-24 2xl:-right-20">
              <div className="flex">
                <img
                  src="/avatar-1.png"
                  alt=""
                  className="w-7 xl:w-10 translate-x-2"
                />
                <img
                  src="/avatar-2.png"
                  alt=""
                  className="w-7 xl:w-10 translate-x-0"
                />
                <img
                  src="/avatar-1.png"
                  alt=""
                  className="w-7 xl:w-10 -translate-x-2"
                />
                <div className="w-7 xl:w-10 flex items-center justify-center bg-white px-3 rounded-full text-black -translate-x-4">
                  <p className="text-center">+5</p>
                </div>
              </div>
              <p className="mt-2 leading-4 text-[10px] sm:w-[60%] md:w-full xl:text-sm">
                People successfully got their dream property
              </p>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center justify-center gap-4 py-8">
            <p className="text-xs text-center sm:w-[60%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text
            </p>
            <button className="text-sm bg-white text-black px-3 py-2 rounded-lg">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Live & Completed Projects */}
      <div className="bg-gradient-to-r from-[#24343BCC] to-[#17262A]">
        <div className="bg-[url('/mobile-pattern.png')] lg:bg-[url('/unico-pattern-black.png')] bg-repeat bg-cover bg-center py-6 2xl:py-12 px-6">
          <h2 className="text-white text-center text-xl sm:text-2xl font-medium">
            Live Projects
          </h2>
          {/* Glassmorphism card */}
          <div className="lg:flex lg:gap-7 xl:gap-10 border border-white/1 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-gradient-to-r from-white/15 to-[#FFFFFF00] p-6 sm:p-10 md:p-12 lg:p-6 xl:px-18 2xl:px-32 rounded-3xl sm:mx-18 md:mx-24 2xl:mx-42 mt-6">
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
                  turpis porttitor sed cras donec. Id ac molestie purus
                  tincidunt in cras. Lorem ipsum dolor sit amet consectetur. Ac
                  consequat at nec id turpis porttitor sed cras donec.
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
          <h2 className="text-center text-white text-2xl md:text-3xl lg:text-2xl py-12">
            Completed Projects
          </h2>
          <div>
            <div className="flex flex-col gap-8 lg:flex-row w-full text-white md:px-32 lg:px-24 2xl:px-42">
              <div className=" rounded-lg flex flex-col items-center justify-end lg:w-full gap-3 pt-24 pb-4 bg-[linear-gradient(to_bottom,_#17262A66,_#24343B66),url('/completed-projects-1.png')] bg-cover bg-no-repeat bg-center md:h-[30vh] xl:h-[40vh]">
                <div className=" flex flex-col items-center justify-center gap-4">
                  <h2 className="text-lg md:font-semibold md:tracking-wider">
                    Nirvanas
                  </h2>
                  <div className="flex items-center justify-between gap-5 font-extralight">
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/double-bed.png"
                        alt="icon-1"
                        className="size-5"
                      />
                      <p className="">6BA</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/bath-tub.png"
                        alt="icon-1"
                        className="size-5"
                      />
                      <p className="">6BA</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/floorplan.png"
                        alt="icon-1"
                        className="size-5"
                      />
                      <p className="">3960 sqft</p>
                    </div>
                  </div>
                  <button className="bg-white px-3 py-2 rounded-full text-xs md:text-sm text-black">
                    View Details
                  </button>
                </div>
              </div>
              <div className=" rounded-lg flex flex-col items-center justify-end lg:w-full gap-3 pt-24 pb-4 bg-[linear-gradient(to_bottom,_#17262A66,_#24343B66),url('/completed-projects-1.png')] bg-cover bg-no-repeat bg-center md:h-[30vh] xl:h-[40vh]">
                <div className=" flex flex-col items-center justify-center gap-4">
                  <h2 className="text-lg md:font-semibold md:tracking-wider">
                    Nirvanas
                  </h2>
                  <div className="flex items-center justify-between gap-5 font-extralight">
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/double-bed.png"
                        alt="icon-1"
                        className="size-5"
                      />
                      <p className="">6BA</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/bath-tub.png"
                        alt="icon-1"
                        className="size-5"
                      />
                      <p className="">6BA</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/floorplan.png"
                        alt="icon-1"
                        className="size-5"
                      />
                      <p className="">3960 sqft</p>
                    </div>
                  </div>
                  <button className="bg-white px-3 py-2 rounded-full text-xs md:text-sm text-black">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 itemce justify-center mt-3 md:mt-5">
              <img
                src="/icons/comp-proj-left-arrow.png"
                alt="comp-proj-left-arrow"
                className="w-14 md:w-16"
              />
              <img
                src="/icons/comp-proj-right-arrow.png"
                alt="comp-proj-left-arrow"
                className="w-14 md:w-16"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div>
        {/* Mobile & Tablets */}
        <div className="lg:hidden px-6 flex flex-col gap-6 md:gap-10 py-12">
          <h2 className="capitalize text-center font-semibold text-xl md:text-3xl">
            Check out our
            <br /> top class{" "}
            <span className="uppercase text-red-500">Amenities</span>
          </h2>
          <p className="text-sm md:text-xl leading-7 text-center font-medium">
            Lorem ipsum dolor sit amet consectetur. Ac consequat at nec
          </p>
          <div className="flex items-center justify-between sm:px-12 md:px-12">
            <div className="text-center flex flex-col gap-3">
              <h2 className="text-nowrap text-zinc-500 md:text-xl">
                Years of Experience
              </h2>
              <h2 className="font-medium text-3xl md:text-2xl">7239</h2>
            </div>
            <div className="text-center flex flex-col gap-3">
              <h2 className="text-zinc-500 md:text-xl">States</h2>
              <h2 className="font-medium text-3xl md:text-2xl">
                79<span className="text-zinc-400">+</span>
              </h2>
            </div>
            <div className="text-center flex flex-col gap-3">
              <h2 className="text-zinc-500 md:text-xl">States</h2>
              <h2 className="font-medium text-3xl md:text-2xl">
                79<span className="text-zinc-400">+</span>
              </h2>
            </div>
          </div>
          {/* Amenities */}
          <div className="flex flex-col gap-4 md:gap-8">
            {/* Carousel container with overflow hidden to show only the current image and part of the next */}
            <div className="relative w-[340px] sm:w-[85%] md:w-full overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 280}px)`,
                }}
              >
                {amenitiesImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`carousel-image-${index}`}
                    className="w-[280px] h-[207px] md:w-[480px] md:h-[327px] object-cover rounded-3xl flex-shrink-0 mr-4"
                  />
                ))}
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-slate-50 pointer-events-none w-10 md:w-32" />
            </div>
            <h2 className="font-semibold text-lg md:text-2xl">
              01 Swimming Pool
            </h2>
            <p className="text-sm md:text-xl">
              Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
              turpis
            </p>
            <div className="flex justify-center gap-4 mt-4">
              {/* Left arrow button */}
              <img
                src="/icons/comp-proj-left-arrow.png"
                alt="Previous"
                className="invert w-16 md:w-20 cursor-pointer"
                onClick={handlePrevClick}
              />
              {/* Right arrow button */}
              <img
                src="/icons/comp-proj-right-arrow.png"
                alt="Next"
                className="invert w-16 md:w-20 cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          </div>
        </div>

        {/* Web */}
        <div className="hidden relative lg:flex flex-col items-center justify-center gap-12 mt-8 px-12 py-24 h-screen w-full">
          <img
            src="/gaikwad-pattern-red-white.png" // Replace with your image path
            alt="Overlay Image"
            className="absolute inset-0 w-full h-full object-cover z-1"
          />
          {/* Texts and Headings */}
          <div className="flex px-32 items-start justify-center gap-24 w-full">
            {/* Headings */}
            <div className="w-1/2">
              <h2 className="capitalize text-3xl font-semibold float-right">
                Check out our <br />
                top class{" "}
                <span className="uppercase text-[#E64237]">amenities</span>
              </h2>
            </div>
            {/* Paragraph's */}
            <div className="w-full">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing
              </p>
              {/* Badges */}
              <div className="flex justify-between mt-6">
                <div className="flex flex-col items-center">
                  <p className="text-xl">Years of experience</p>
                  <h2 className="font-medium text-3xl">7239</h2>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xl">States</p>
                  <h2 className="font-medium text-3xl">9+</h2>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xl">States</p>
                  <h2 className="font-medium text-3xl">9+</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="z-10 bg-[url('/swimming-pool.png')] bg-cover bg-no-repeat bg-center aspect-video size-3/4 rounded-3xl mx-auto flex flex-col justify-end gap-7 pl-10 pb-8">
            <div className="flex items-center justify-between">
              {/* h2 & p div */}
              <div className="flex flex-col gap-7 w-4/5 ">
                <h2 className="text-4xl font-base text-white leading-12 w-fit">
                  Swimming <br /> Pool
                </h2>
                <p className="text-white pr-8">
                  Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                  turpis porttitor sed cras donec. Id ac molestie purus
                  tincidunt in{" "}
                </p>
              </div>
              {/* Image Carousel */}
              <div className="flex items-center justify-between gap-4 mr-37.5 2xl:mr-49.5">
                <img src="/basketball.png" alt="" className="w-[10vw]" />
                <img src="/gym.png" alt="" className="w-[10vw]" />
                <img src="/tennis.png" alt="" className="w-[10vw]" />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between gap-3 pr-10">
              <div className="flex gap-3">
                <img
                  src="/icons/comp-proj-left-arrow.png"
                  alt=""
                  className="w-1/6"
                />
                <img
                  src="/icons/comp-proj-right-arrow.png"
                  alt=""
                  className="w-1/6"
                />
              </div>
              <h2 className="text-3xl text-white font-medium">01</h2>
            </div>
          </div>
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

      {/* Reviews */}
      <div className="relative bg-gradient-to-r overflow-x-hidden flex flex-col items-center justify-center gap-8 from-[#24343B] to-[#0C1C20] pt-12 pb-20 md:pb-0 sm:h-[75vh] md:h-[90vh] lg:h-[87vh] 2xl:h-[88vh]">
        <img
          loading="lazy"
          src="/unico-pattern-black.png" // Replace with your image path
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover z-1"
        />
        <h2 className="text-white text-2xl md:text-3xl uppercase font-medium">
          reviews
        </h2>
        <ReviewCarousel slides={reviewSlides} />
      </div>

      {/* Instagram Highlight */}
      <div className="relative h-[65vh] md:h-[76vh] lg:h-[78vh] 2xl:h-[72vh] overflow-x-hidden">
        <img
          loading="lazy"
          src="/gaikwad-pattern-red-white.png" // Replace with your image path
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover z-1"
        />
        <h2 className="text-[#24343B] text-xl md:text-2xl font-semibold text-center py-6 md:py-10">
          Instagram Highlights
        </h2>
        <InstagramCarousel slides={highlights} />
      </div>

      {/* Blogs */}
      <Blogs articles={articles}/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
