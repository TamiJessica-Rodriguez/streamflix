import React, { useRef, useState } from "react";
import { Movie } from "../data/mockedData";
import InfoPage from "../pages/InfoPage"; // Importera InfoPage-modalen

interface MovieCarouselProps {
  movies: Movie[];
  bookmarked: Set<number>;
  toggleBookmark: (movieId: number) => void;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({
  movies,
  bookmarked,
  toggleBookmark,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (movieId: number) => {
    setSelectedMovieId(movieId);
    setShowModal(true); // Visa modalen när en film klickas på
  };

  const handleCloseModal = () => {
    setSelectedMovieId(null);
    setShowModal(false); // Stäng modalen när användaren klickar på stäng-knappen
  };

  const scroll = (direction: "left" | "right") => {
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
              <button onClick={() => handleClick(movie.id)}>
                {" "}
                {/* Använd en knapp och onClick för att kalla handleClick */}
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="h-48 object-cover"
                />
              </button>
              <button
                onClick={() => toggleBookmark(movie.id)}
                className="absolute top-0 right-0 p-2"
                aria-label="Bookmark"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={bookmarked.has(movie.id) ? "lightgray" : "none"}
                  stroke="currentColor"
                  className="w-6 h-6"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out opacity-40 pointer-events-none"
        style={{ top: "50%" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out opacity-40 pointer-events-none"
        style={{ top: "50%" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
      {showModal && selectedMovieId && (
        <InfoPage
          movieId={selectedMovieId.toString()} // Skicka det valda movieId till InfoPage
          onCloseModal={handleCloseModal} // Skicka en funktion för att stänga modalen till InfoPage
        />
      )}
    </div>
  );
};

export default MovieCarousel;
