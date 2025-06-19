import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageControllerProps {
  current: number;
  setCurrent: (index: number) => void;
  images: string[];
  visibleCount?: number;
}

const ImageController = ({
  current,
  setCurrent,
  images,
  visibleCount = 3,
}: ImageControllerProps) => {
  const total = images.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  const getVisibleImages = (): { src: string; index: number }[] => {
    // Calculate the starting index to center the current image in the visible thumbnails
    const start = Math.max(0, current - Math.floor(visibleCount / 2));
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (start + i) % total;
      return { src: images[index], index };
    });
  };

  return (
    <div className="relative w-full 2xl:mr-0! 2xl:w-[94%] lg:items-start md:my-6 my-5 max-w-4xl h-[10vh] md:h-[12vh] 2xl:h-[10vh] flex items-center justify-center overflow-hidden">
      <button
        onClick={prev}
        className="absolute left-0 h-full bg-red-600 w-8 md:w-10 flex items-center justify-center text-white z-10"
        aria-label="Previous"
      >
        <ChevronLeft />
      </button>

      <div className="flex gap-4 overflow-hidden px-12 w-full justify-center">
        {getVisibleImages().map(({ src, index }) => (
          <div
            key={index}
            onClick={() => setCurrent(index)} // Update the current index when a thumbnail is clicked
            className={`w-[150px] h-[100px] md:h-[12vh] flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all ${
              index === current ? 'border-2 border-blue-500 opacity-100' : 'opacity-70'
            }`} // Highlight the current image
          >
             <img loading="lazy"
              src={src}
              alt={`carousel-${index}`}
              className="w-full h-full object-cover"
               
            />
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="absolute right-0 h-full bg-red-600 w-8 md:w-10 flex items-center justify-center text-white z-10"
        aria-label="Next"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ImageController;