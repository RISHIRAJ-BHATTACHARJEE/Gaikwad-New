import Footer from "../components/Footer";
import Header from "../components/Header";
import InstagramHighlights from "../components/InstagramHighlightsSection";

const Home = () => {
  return (
    <div className="montserrat-regular">
      {/* Hero */}
      <div className="bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat h-screen flex items-end">
        {/* Hero Section */}
        <div className="bg-[#0C1C20] pt-12 mx-14 w-full">
          <Header />
          <h2 className="2xl:text-9xl xl:text-8xl font-semibold uppercase text-center text-white tracking-wider 2xl:mt-0 xl:mt-8 2xl:translate-y-16 xl:translate-y-12">
            Dream Estate
          </h2>
          <div className="lg:sticky text-white">
            <div className="relative lg:flex items-end">
              <div className="flex flex-col gap-6 absolute top-1/4 left-1/8 xl:left-1/10">
                <p className="font-light text-sm w-2/6 xl:w-2/7">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <button className="bg-white text-sm text-black py-2 px-3 w-fit rounded-xl">
                  Discover More
                </button>
              </div>
              <img
                src="1.png"
                alt=""
                className="mx-auto 2xl:w-[53%] xl:w-[70%] xl:translate-x-16"
              />
              <div className="absolute right-1/6 xl:right-1/8 top-1/4 flex flex-col gap-3">
                {/* Avatars */}
                <div className="flex space-x-[-5px]">
                  <img
                    src="avatar-1.png"
                    alt="avatar-1"
                    className="size-6 md:size-10 rounded-full"
                  />
                  <img
                    src="avatar-2.png"
                    alt="avatar-1"
                    className="size-6 md:size-10 rounded-full"
                  />
                  <img
                    src="avatar-1.png"
                    alt="avatar-1"
                    className="size-6 md:size-10 rounded-full"
                  />
                  <span className="size-6 md:size-10 rounded-full bg-white text-black text-[8px] md:text-xl text-center pt-1.5">
                    +5
                  </span>
                </div>
                <p className="text-sm">
                  People successfully got <br /> their dream property
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live/Completed Projects */}
      <div className="bg-gradient-to-r from-[#24343BCC] to-[#17262A] py-12">
        {/* Live Projects */}
        <div className="bg-[url('/unico-pattern-black.png')] bg-cover bg-center bg-no-repeat h-full flex flex-col items-center justify-center gap-12">
          <h2 className="xl:text-2xl 2xl:text-4xl font-semibold text-center text-white">
            Live Projects
          </h2>
          {/* Glassmorphism Card */}
          <div className="border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15 2xl:p-12 xl:p-12 2xl:mx-58 xl:mx-24 rounded-3xl flex 2xl:gap-10 xl:gap-12">
            {/* Image */}
            <div className="flex flex-col justify-between gap-6 w-full">
              <img
                src="/live-project.png"
                alt="live-project"
                className="2xl:w-full 2xl:ml-auto"
              />
              <div className="mt-auto">
                <img
                  src="/live-project-controller.png"
                  alt=""
                  className="2xl:w-full 2xl:ml-auto"
                />
              </div>
            </div>
            {/* Texts */}
            <div className="w-full text-white flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-4">
                {/* RERA & Name */}
                <div className="flex gap-10">
                  <h2 className="text-3xl 2xl:text-2xl font-medium">ABC</h2>
                  <h2 className="text-2xl 2xl:text-xl">
                    RERA No: XXXX XXXX XX
                  </h2>
                </div>
                {/* Specifications */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <img
                      src="icons/double-bed.png"
                      alt=""
                      className="xl:w-1/5 2xl:w-1/4"
                    />
                    <h2 className="text-xl">6BA</h2>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src="icons/bath-tub.png"
                      alt=""
                      className="xl:w-1/5 2xl:w-1/4"
                    />
                    <h2 className="text-xl">6BA</h2>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src="icons/floorplan.png"
                      alt=""
                      className="xl:w-1/7 2xl:w-1/6"
                    />
                    <h2 className="text-xl">3960sqft</h2>
                  </div>
                </div>
                {/* Paragraph */}
                <div>
                  <p className="text-sm italic leading-6">
                    Lorem ipsum dolor sit amet consectetur. Ac consequat at nec
                    id turpis porttitor sed cras donec. Id ac molestie purus
                    tincidunt in cras. Quis a lacus molestie praesent
                    suspendisse ac tellus. Auctor tristique ultrices magna
                    purus. Lorem ipsum dolor sit amet consectetur. Ac consequat
                    at nec id tristique ultrices magna purus. tristique ultrices
                    magna purus.
                    <button className="bg-white px-3 py-2 rounded-xl text-black ml-2">
                      Read More
                    </button>
                  </p>
                </div>
                {/* Floors & Booking Details */}
                <div className="flex">
                  <div className="flex flex-col items-center justify-center gap-4 px-8 border-r">
                    <h2 className="text-sm">Floors</h2>
                    <h2 className="text-3xl 2xl:text-2xl">12</h2>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 px-8 border-r">
                    <h2 className="text-sm">Units</h2>
                    <h2 className="text-3xl 2xl:text-2xl">80</h2>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 px-8">
                    <h2 className="text-sm">Booked</h2>
                    <h2 className="text-3xl 2xl:text-2xl">80</h2>
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-col gap-3 text-black mt-auto">
                <div className="flex gap-2">
                  <button className="bg-white rounded-xl w-full flex items-center justify-center 2xl:py-3 xl:py-3 gap-2 font-medium">
                    <img
                      src="icons/google-maps.png"
                      alt="google-maps"
                      className="w-[7%]"
                    />
                    Google Maps
                  </button>
                  <button className="bg-white rounded-xl w-full 2xl:py-2 xl:py-3 font-medium">
                    Download Brochure
                  </button>
                </div>
                <button className="bg-[#E64237] w-full 2xl:py-3 xl:py-3 rounded-full text-white">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Completed Projects */}
        <div className="bg-[url('/unico-pattern-black.png')] bg-cover bg-center bg-no-repeat h-full pt-24 pb-16">
          <h2 className="text-center text-4xl text-white font-semibold">
            Completed Projects
          </h2>
          <div className="flex 2xl:gap-10 xl:gap-8 items-center justify-center 2xl:mx-88 xl:mx-36 pt-12">
            {/* Nirvanas Card */}
            <div className="bg-[url('/completed-nirvanas.png')] bg-cover bg-center bg-no-repeat 2xl:h-[35vh] xl:h-[35vh] flex flex-col items-center justify-between w-full p-4 relative">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div></div> {/* Empty div to push content to bottom */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <h2 className="text-xl font-medium text-white">Nirvanas</h2>
                {/* Features */}
                <div className="flex items-center justify-center text-white w-fit">
                  <div className="flex gap-2 items-center w-fit">
                    <img
                      src="icons/double-bed.png"
                      alt=""
                      className="xl:w-1/5 2xl:w-1/8"
                    />
                    <h2 className="">6BA</h2>
                  </div>
                  <div className="flex gap-2 items-center w-fit">
                    <img
                      src="icons/bath-tub.png"
                      alt=""
                      className="xl:w-1/5 2xl:w-1/8"
                    />
                    <h2 className="">6BA</h2>
                  </div>
                  <div className="flex gap-2 items-center w-fit">
                    <img
                      src="icons/floorplan.png"
                      alt=""
                      className="xl:w-1/7 2xl:w-1/8"
                    />
                    <h2 className="">3960sqft</h2>
                  </div>
                </div>
                <button className="bg-[#DFDFDF] px-4 py-2 rounded-full">
                  View Details
                </button>
              </div>
            </div>
            {/* Shivirth Card */}
            <div className="bg-[url('/completed-shivirth.png')] bg-cover bg-center bg-no-repeat 2xl:h-[35vh] xl:h-[35vh] flex flex-col items-center justify-between w-full p-4 relative">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div></div> {/* Empty div to push content to bottom */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <h2 className="text-xl font-medium text-white">Shivirth</h2>
                {/* Features */}
                <div className="flex items-center justify-center text-white">
                  <div className="flex gap-2 items-center">
                    <img
                      src="icons/double-bed.png"
                      alt=""
                      className="xl:w-1/5 2xl:w-1/8"
                    />
                    <h2 className="">6BA</h2>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src="icons/bath-tub.png"
                      alt=""
                      className="xl:w-1/5 2xl:w-1/8"
                    />
                    <h2 className="">6BA</h2>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src="icons/floorplan.png"
                      alt=""
                      className="xl:w-1/7 2xl:w-1/8"
                    />
                    <h2 className="">3960sqft</h2>
                  </div>
                </div>
                <button className="bg-[#DFDFDF] px-4 py-2 rounded-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-[url('/gaikwad-pattern-red-white.png')] bg-cover bg-center bg-no-repeat h-full flex flex-col items-center justify-center gap-12 2xl:px-88 xl:px-36 py-12">
        {/* Texts */}
        <div className="flex items-start justify-between w-full ">
          {/* Headings */}
          <div className="w-full flex flex-col gap-3 font-semibold">
            <h2 className="text-[#24343B] 2xl:text-5xl xl:text-4xl">
              Check Out Our{" "}
            </h2>
            <h2 className="text-[#24343B] 2xl:text-5xl xl:text-4xl">
              Top Class{" "}
              <span className="text-[#E64237] uppercase">Amenities</span>
            </h2>
          </div>
          {/* other Texts & Badges */}
          <div className="w-full text-[#24343B] flex flex-col gap-8">
            {/* Other texts */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing
            </p>
            {/* Badges */}
            <div className="flex items-center justify-start gap-6">
              <div className="flex flex-col items-center justify-center">
                <h2>Years of experience</h2>
                <p className="text-3xl font-medium">7239</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2>States</h2>
                <p className="text-3xl font-medium">79+</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2>States</h2>
                <p className="text-3xl font-medium">79+</p>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full">
          <img src="/component-2.png" alt="" className="w-full" />
        </div>
      </div>

      {/* TODO: About Us Functional */}
      <div>
        <img src="/about-us-page.png" alt="" className="w-full" />
      </div>

      {/* TODO: meet the team Functional */}
      <div className="bg-[#EBEAEA]">
        <div className="bg-[url('/gaikwad-pattern-red-white.png')] bg-cover bg-center bg-no-repeat 2xl:px-24">
          <img src="/meet-the-team.png" alt="" className="w-full" />
        </div>
      </div>

      {/* TODO: reviews Functional */}
      <div className="bg-gradient-to-r from-[#24343B] to-[#0C1C20]">
        <div className="bg-[url('/unico-pattern-black.png')] bg-cover bg-center bg-no-repeat 2xl:px-24">
          <img src="/reviews.png" alt="" className="w-full" />
        </div>
      </div>

      <InstagramHighlights />

      {/* TODO: blogs Functional */}
      <div>
        <img src="/blogs.png" alt="" className="w-full" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
