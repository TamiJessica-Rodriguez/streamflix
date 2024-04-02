// import React, { useRef, useState } from "react";
// import { Movie } from "../data/mockedData";
// import InfoPage from "../pages/InfoPage";

// interface MovieCarouselProps {
//   movies: Movie[];
//   bookmarked: Set<number>;
//   toggleBookmark: (movieId: number) => void;
// }

// const MovieCarousel: React.FC<MovieCarouselProps> = ({
//   movies,
//   bookmarked,
//   toggleBookmark,
// }) => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleClick = (movieId: number) => {
//     setSelectedMovieId(movieId);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedMovieId(null);
//     setShowModal(false);
//   };

//   const scroll = (direction: "left" | "right", event: React.MouseEvent) => {
//     event.stopPropagation();
//     if (carouselRef.current) {
//       const { current } = carouselRef;
//       const scrollAmount = current.offsetWidth / 3;
//       const scrollTo = direction === "left" ? -scrollAmount : scrollAmount;
//       current.scrollBy({ left: scrollTo, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center">
//       <div className="flex overflow-hidden" ref={carouselRef}>
//         <div className="flex flex-nowrap">
//           {movies.map((movie) => (
//             <div key={movie.id} className="inline-flex flex-none p-2 relative">
//               <img
//                 src={movie.thumbnail}
//                 alt={movie.title}
//                 className="h-48 object-cover cursor-pointer"
//                 onClick={() => handleClick(movie.id)}
//               />
//               <button
//                 className="absolute top-2 right-2 text-white"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleBookmark(movie.id);
//                 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill={bookmarked.has(movie.id) ? "Lightgray" : "none"}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={(e) => scroll("left", e)}
//         className="absolute left-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
//         style={{ top: "50%" }}
//       >
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </button>
//       <button
//         onClick={(e) => scroll("right", e)}
//         className="absolute right-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
//         style={{ top: "50%" }}
//       >
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>
//       {showModal && selectedMovieId && (
//         <InfoPage
//           movieId={selectedMovieId.toString()}
//           onCloseModal={handleCloseModal}
//           toggleBookmark={toggleBookmark}
//         />
//       )}
//     </div>
//   );
// };

// export default MovieCarousel;

import {
  faStar as emptyStar,
  faStarHalfAlt,
  faStar as fullStar,
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

  const renderStars = (rating?: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating || 0)) {
        stars.push(
          <FontAwesomeIcon
            icon={fullStar}
            className="text-yellow-400"
            key={i}
          />
        );
      } else if (i === Math.ceil(rating || 0)) {
        stars.push(
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="text-yellow-400"
            key={i}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon icon={emptyStar} className="text-gray-300" key={i} />
        );
      }
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
                onClick={() => handleClick(movie.id)}
              />
              <button
                className="absolute top-2 right-2 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(movie.id);
                }}
              >
                {/* Bookmark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={bookmarked.has(movie.id) ? "red" : "none"}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                  />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-1 flex justify-center">
                {renderStars(movie.isRating)}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll buttons and Modal logic as before */}
      <button
        onClick={(e) => scroll("left", e)}
        className="absolute left-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
        style={{ top: "50%" }}
      >
        {/* Left Arrow Icon */}
      </button>
      <button
        onClick={(e) => scroll("right", e)}
        className="absolute right-0 z-20 mx-2 my-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
        style={{ top: "50%" }}
      >
        {/* Right Arrow Icon */}
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
