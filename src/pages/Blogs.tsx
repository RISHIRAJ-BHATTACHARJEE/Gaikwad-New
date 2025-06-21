import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";

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

const Blogs = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#CE3631] to-[#E64237E5] p-6 montserrat-regular">
        <div className="bg-[url('/pattern-white.png')] bg-cover bg-center bg-repeat">
          <Header />
          <h2 className="text-2xl md:text-3xl text-white font-semibold text-center uppercase mt-12">
            our blogs
          </h2>
          {/* Mobile Card */}
          <div className="lg:hidden bg-white mt-12 flex flex-col justify-center items-center gap-4 p-6 sm:mx-24 md:p-8 md:mx-18 rounded-[40px] md:rounded-[50px]">
            <img loading="lazy" src="/blogs-1.png" alt="blog-1" className="" />
            <p className="font-semibold md:w-full md:text-xl">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="self-start text-sm md:text-lg text-zinc-500">
              12 Jun, 2025
            </p>
          </div>

          {/* Web Card */}
          <div className="hidden lg:flex bg-white rounded-3xl mx-18 mt-12">
            {/* Texts */}
            <div className="p-12 flex flex-col gap-4 w-full border-2 border-black">
              <h2 className="text-xl font-semibold">
                Lorem Ipsum is simply dummy text of the printing
              </h2>
              <p className='text-xs text-zinc-500'>12 jun, 2025</p>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <button className="w-fit bg-[#17262A] text-white px-8 py-2 rounded-lg">
                Read More
              </button>
            </div>
            {/* image */}
            <div className="border-2 border-black w-full">
                <img src="/blogs-img.png" alt="" />
            </div>
          </div>

          <hr className="text-white my-12 lg:hidden" />
          <div className="sm:mx-20 md:px-18">
            <h2 className="text-2xl md:text-3xl text-white font-semibold text-center uppercase mb-6 lg:mt-18">
              Read All Articles
            </h2>
            <div className="lg:hidden">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 p-4 rounded-lg mb-4 lg:grid grid-cols-3"
                >
                  <img
                    loading="lazy"
                    src={article.image}
                    alt=""
                    className="w-32 md:w-42"
                  />
                  <div className="flex flex-col justify-between gap-4">
                    <p className="text-white font-medium text-sm md:text-xl">
                      {article.text}
                    </p>
                    <p className="text-white/70 text-xs md:text-lg">
                      {article.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Web */}
            <div className="hidden lg:grid grid-cols-3 gap-6 my-12">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 p-4 rounded-[40px] mb-4 hover:bg-[#A71E22]/50"
                >
                  <div>
                    <img
                      loading="lazy"
                      src={article.image}
                      alt=""
                      className=""
                    />
                    <div className="flex flex-col justify-between gap-4">
                      <p className="text-white font-medium text-sm md:text-xl mt-4">
                        {article.text}
                      </p>
                      <p className="text-white/70 text-xs md:text-lg">
                        {article.date}
                      </p>
                    </div>
                    <p className="flex gap-3 text-white mt-8">
                      Read More <ArrowRight />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Blogs;
