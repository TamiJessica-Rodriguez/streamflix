import React, { useEffect, useRef } from "react";
import { useBookmarked } from "../context/BookmarkedContext";
import { Movie, mockedData } from "../data/mockedData";

interface InfoPageProps {
  movieId: string;
  onCloseModal: () => void;
  toggleBookmark: (movieId: number) => void;
}

const InfoPage: React.FC<InfoPageProps> = ({
  movieId,
  onCloseModal,
  toggleBookmark,
}) => {
  const movie: Movie | undefined = mockedData.find(
    (movie) => movie.id.toString() === movieId
  );
  const modalRef = useRef<HTMLDivElement>(null);
  const { bookmarked } = useBookmarked();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onCloseModal]);

  return (
    <div className="text-white">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-75"></div>
          </div>

          <div
            className="
             translate-y-0 overflow-hidden rounded-lg bg-stone-950 shadow-xl transition-all sm:w-full sm:max-w-lg"
            ref={modalRef}
          >
            <div className="p-4">
              {movie && (
                <button
                  onClick={() => toggleBookmark(movie.id)} // Changed from toggleBookmark
                  className="absolute right-0 top-0 p-2"
                  aria-label="Bookmark"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={bookmarked.has(movie.id) ? "red" : "none"}
                    stroke="currentColor"
                    className="size-6"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              )}
              <div className="text-center"></div>

              <div className="mt-4">
                {movie && (
                  <>
                    <img
                      src={movie.thumbnail}
                      alt={movie.title}
                      className="mx-auto h-auto w-52 rounded-md"
                    />
                    <h3 className="mt-2 text-lg font-medium">{movie.title}</h3>
                    <div className="text-sm font-light">
                      {movie.genre} | {movie.year}
                    </div>
                    {/* Display the movie's actors */}
                    <div className="text-sm font-light">
                      Actors: {movie.actors}
                    </div>
                    {/* Display the movie's rating */}
                    <div className="text-sm font-light">
                      Rating: {movie.ageRating}
                    </div>
                    <p className="mt-4">{movie.synopsis}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
