import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  review: string;
  bgImage: string;
  profileImage: string;
  name: string;
  designation: string;
  rating: number;
}

interface SlideProps {
  card: {
    review: string;
    bgImage: string;
    profileImage: string;
    name: string;
    designation: string;
    rating: number;
  };
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ card, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <div className="">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white transition-all duration-300 ease-in-out w-[270px] md:w-[40vw] lg:w-[28vw] xl:w-[24vw] 2xl:w-[300px] 2xl:h-[480px] h-[415px] md:h-[60vh] mx-[4vmin] sm:mx-2 md:mx-[1vmin] 2xl:mx-2 z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          opacity: current === index ? 1 : 0.5,
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 sm:left-26 md:left-38 2xl:left-14 w-full h-full rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('/${card.bgImage}.png')`,
            backgroundSize: "cover",
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30))"
                : "none",
          }}
        >
          <div
            className="flex flex-col items-center justify-between p-6 backdrop-blur-[5px] h-full rounded-3xl shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)"
            style={{
              background:
                "linear-gradient(to right, #E64237, #A71E22), rgba(255, 255, 255, 0.15)",
            }}
          >
             <img loading="lazy"
              src="/icons/quote.png"
              alt="quote"
              className="w-8 md:w-12 lg:w-10 2xl:w-10 self-end mr-6"
            />
            <p className="text-white text-xs md:text-sm 2xl:text-xs font-light leading-5 md:leading-6">
              {card.review}
            </p>
            <div className="flex items-center justify-between w-full">
              <div className="flex text-white gap-2 text-sm">
                 <img loading="lazy" src={card.profileImage} alt="avatar" className="w-10 md:w-14 lg:size-10 2xl:w-12" />
                <div >
                  <h2  className="md:text-lg lg:text-sm 2xl:text-base">{card.name}</h2>
                  <p className="md:text-lg lg:text-sm 2xl:text-base">{card.designation}</p>
                </div>
              </div>
              <div className="flex gap-1 md:gap-3 items-center justify-center bg-gray-500 px-1 md:px-3 rounded-xl">
                 <img loading="lazy" src="/icons/Star.png" alt="star" className="w-2.5 md:w-5 lg:w-3 2xl:w-4" />
                <p className="text-[10px] md:text-xl lg:text-sm 2xl:text-base text-white md:text-center">{card.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-14 h-14 md:w-24 md:h-24 2xl:w-20 2xl:h-20 flex items-center mx-2 justify-center border-3 border-transparent rounded-full focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
       <img loading="lazy" src="/icons/comp-proj-right-arrow.png" alt="" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function ReviewCarousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[110vmin] mx-auto z-10"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] 2xl:mx-18 transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            card={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[101%] md:top-126 2xl:top-126">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
