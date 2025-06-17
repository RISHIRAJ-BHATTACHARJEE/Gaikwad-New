import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  image: string;
  description: string;
}

interface SlideProps {
  card: SlideData;
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
    <div className="[perspective:2000px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white transition-all duration-300 ease-in-out w-[250px] h-[385px] mx-[4vmin] md:mx-[9vmin] lg:mx-5 z-10"
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
          className="absolute top-0 left-0 md:left-22 lg:left-46 w-full h-full md:w-[30vh] md:h-[50vh] 2xl:w-[28vh] 2xl:h-[45vh] rounded-sm overflow-hidden"
          style={{
            backgroundImage: `url('/${card.image}')`,
            backgroundSize: "cover",
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30))"
                : "none",
          }}
        >
          <div
            className="flex flex-col items-center justify-between p-6 h-full rounded-sm"
            style={{
              background: "#0000004d",
            }}
          >
            {/* Card Components */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <img loading="lazy"
                src="/icons/line_instagram.png"
                alt="Instagram icon"
                className="size-12"
              />
            </div>
            <p className="text-start text-xs w-3/4 self-start font-light mt-auto">
              Lorem ipsum dolor sit amet consectetur.
            </p>
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
      className={`w-14 h-14 md:w-24 md:h-24 2xl:w-18 2xl:h-18 flex items-center mx-2 justify-center border-3 border-transparent rounded-full focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
       <img loading="lazy" src="/icons/comp-proj-right-arrow.png" alt="" className="invert"/>
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function InstagramCarousel({ slides }: CarouselProps) {
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
      className="relative z-10 w-[70vmin] h-[110vmin] md:h-[60vmin] md:scroll-none mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] 2xl:-mx-2 transition-transform duration-1000 ease-in-out"
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

      <div className="absolute flex justify-center w-full -bottom-6 md:top-122 lg:top-102 2xl:top-110">
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
