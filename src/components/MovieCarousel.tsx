import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { movie } from "../data/mockedData";

interface MovieCarouselProps {
  movies: movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDimmed, setIsDimmed] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = current.offsetWidth / 3;
      const scrollTo = direction === "left" ? -scrollAmount : scrollAmount;
      current.scrollBy({ left: scrollTo, behavior: "smooth" });
      setIsDimmed(true);
      setTimeout(() => setIsDimmed(false), 300);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`${
          isDimmed ? "opacity-50" : ""
        } flex overflow-hidden transition-opacity duration-300`}
        ref={carouselRef}
      >
        <div className="flex flex-nowrap">
          {movies.map((movie) => (
            <div key={movie.id} className="inline-flex flex-none p-2">
              <Link to={`/info/${movie.id}`}>
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="h-48 object-cover"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
        style={{ top: "50%" }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
        style={{ top: "50%" }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default MovieCarousel;
