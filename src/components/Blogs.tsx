import React from "react";

interface Article {
  image: string;
  text: string;
  date: string;
}

interface BlogsProps {
  articles: Article[];
}

const Blogs: React.FC<BlogsProps> = ({ articles }) => {
  return (
    <>
      {/* Mobile & Tablets */}
      <div className="lg:hidden bg-gradient-to-b from-[#CE3631] to-[#E64237E5] p-6 md:px-20 montserrat-regular">
        <h2 className="text-2xl md:text-3xl text-white font-semibold text-center uppercase mt-6">
          our blogs
        </h2>
        <div className="bg-white sm:w-[70%] sm:mx-auto mt-12 flex flex-col justify-center items-center gap-4 p-6 md:p-10 rounded-[40px] md:rounded-[70px]">
          <img loading="lazy" src="/blogs-1.png" alt="Main Blog" className="" />
          <p className="font-semibold self-start md:text-xl">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <p className="self-start text-sm md:text-lg text-zinc-500">
            12 Jun, 2025
          </p>
        </div>
        <hr className="text-white my-12" />
        <div className="sm:px-12">
          <h2 className="text-2xl text-white font-semibold text-center uppercase mb-6">
            Read All Articles
          </h2>
          {articles.map((article, index) => (
            <div
              key={`${article.text}-${index}`}
              className="flex items-center gap-5 p-4 rounded-lg mb-4"
            >
              <img
                loading="lazy"
                src={article.image}
                alt={`Article thumbnail ${index + 1}`}
                className="w-32 md:w-42"
              />
              <div className="flex flex-col justify-between gap-4">
                <p className="text-white font-medium text-sm md:text-lg">
                  {article.text}
                </p>
                <p className="text-white/70 text-xs md:text-lg">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Web */}
      <div className="hidden relative lg:flex flex-col gap-12 bg-gradient-to-b from-[#CE3631] to-[#E64237E5] p-20 montserrat-regular">
        <h2 className="text-center text-4xl text-white font-semibold">
          Our Blogs
        </h2>
        <img
          loading="lazy"
          src="/gaikwad-pattern-red-white.png"
          alt="Background Overlay"
          className="absolute inset-0 w-full h-full object-cover z-1"
        />
        <div className="flex gap-4 w-full">
          <div className="bg-white p-12 flex flex-col items-start justify-center gap-6 rounded-xl w-[60%]">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Heading</h2>
              <p className="text-xs text-zinc-500">12 Jun, 2025</p>
            </div>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <button className="bg-[#17262A] px-4 py-3 text-white w-fit rounded-xl">
              Read More
            </button>
          </div>
          <div className="bg-white rounded-xl grid grid-cols-2 gap-8 items-center justify-center w-[40%] p-8">
            <div>
              <img src="/our-blogs-1.png" alt="our-blogs-1" className="" />
              <p className="font-semibold text-sm">Lorem Ipsum</p>
            </div>
            <div>
              <img src="/our-blogs-2.png" alt="our-blogs-2" className="" />
              <p className="font-semibold text-sm">Lorem Ipsum</p>
            </div>
            <div>
              <img src="/our-blogs-3.png" alt="our-blogs-3" className="" />
              <p className="font-semibold text-sm">Lorem Ipsum</p>
            </div>
            <div>
              <img src="/our-blogs-4.png" alt="our-blogs-4" className="" />
              <p className="font-semibold text-sm">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
