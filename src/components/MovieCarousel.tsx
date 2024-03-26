import React, { useRef, useState } from "react";
import { Movie } from "../data/mockedData";
import InfoPage from "../pages/InfoPage";

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (movieId: number) => {
    setSelectedMovieId(movieId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovieId(null);
    setShowModal(false);
  };

  const scroll = (direction: "left" | "right", event: React.MouseEvent) => {
    event.stopPropagation();
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = current.offsetWidth / 3;
      const scrollTo = direction === "left" ? -scrollAmount : scrollAmount;
      current.scrollBy({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex overflow-hidden" ref={carouselRef}>
        <div className="flex flex-nowrap">
          {movies.map((movie) => (
            <div key={movie.id} className="inline-flex flex-none p-2 relative">
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="h-48 object-cover cursor-pointer"
                onClick={() => handleClick(movie.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={(e) => scroll("left", e)}
        className="absolute left-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
        style={{ top: "50%" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={(e) => scroll("right", e)}
        className="absolute right-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
        style={{ top: "50%" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {showModal && selectedMovieId && (
        <InfoPage
          movieId={selectedMovieId.toString()}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MovieCarousel;
