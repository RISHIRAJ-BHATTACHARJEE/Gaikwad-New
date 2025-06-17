import { InstagramCarousel } from "./instagram-carousel";

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
]

const InstagramHighlights = () => {
  return (
    <div className="bg-[url('/gaikwad-pattern-red-white.png')] bg-cover bg-center bg-no-repeat relative h-[73vh] md:h-[76vh] lg:h-[80vh] md:overflow-x-hidden ">
      <h2 className="text-[#24343B] text-xl md:text-3xl font-semibold text-center py-6 md:py-10">
        Instagram Highlights
      </h2>
      <InstagramCarousel slides={highlights}/>
      
    </div>
  );
};

export default InstagramHighlights;