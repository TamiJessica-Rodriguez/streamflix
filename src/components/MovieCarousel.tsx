import {
  faStar as emptyStar,
  faArrowLeft,
  faArrowRight,
  faStarHalfAlt,
  faStar as fullStar,
  faHeart as heartOutline,
  faHeart as heartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Movie } from "../data/mockedData";
import InfoPage from "../pages/InfoPage";

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

  const handleMovieClick = (movieId: number) => {
    setSelectedMovieId(movieId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovieId(null);
    setShowModal(false);
  };

  const handleBookmarkClick = (e: React.MouseEvent, movieId: number) => {
    e.stopPropagation();
    toggleBookmark(movieId);
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

  const renderStars = (rating?: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={
            i <= Math.floor(rating || 0)
              ? fullStar
              : i === Math.ceil(rating || 0)
              ? faStarHalfAlt
              : emptyStar
          }
          className={i <= (rating || 0) ? "text-yellow-400" : "text-gray-300"}
          key={i}
        />
      );
    }
    return <div className="flex">{stars}</div>;
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
                onClick={() => handleMovieClick(movie.id)}
              />
              <button
                className="absolute top-2 right-2 text-white"
                onClick={(e) => handleBookmarkClick(e, movie.id)}
              >
                <FontAwesomeIcon
                  icon={bookmarked.has(movie.id) ? heartSolid : heartOutline}
                  className={
                    bookmarked.has(movie.id) ? "text-red-500" : "text-white"
                  }
                />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-1 flex justify-center">
                {renderStars(movie.isRating)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={(e) => scroll("left", e)}
        className="absolute left-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
        style={{ top: "50%" }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={(e) => scroll("right", e)}
        className="absolute right-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
        style={{ top: "50%" }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      {showModal && selectedMovieId && (
        <InfoPage
          movieId={selectedMovieId.toString()}
          onCloseModal={handleCloseModal}
          toggleBookmark={toggleBookmark}
        />
      )}
    </div>
  );
};

export default MovieCarousel;
