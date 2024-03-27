import React, { useEffect, useRef } from "react";
import { mockedData } from "../data/mockedData";

interface InfoPageProps {
  movieId: string; // Lägg till movieId i props
  onCloseModal: () => void;
  toggleBookmark: (movieId: number) => void;
}

const InfoPage: React.FC<InfoPageProps> = ({
  movieId,
  onCloseModal,
  toggleBookmark,
}) => {
  const movie = mockedData.find((movie) => movie.id.toString() === movieId);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onCloseModal();
  };

  // const [bookmarked, setBookmarked] = useState<Set<number>>(() => {
  //   const stored = localStorage.getItem("bookmarkedMovies");
  //   return new Set(stored ? JSON.parse(stored) : []);
  // });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-white">
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-75"></div>
          </div>

          <div
            className="bg-stone-950
             rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
            ref={modalRef}
          >
            <div className="p-4">
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
              <div className="text-center"></div>
              <div className="mt-4">
                <img src={movie?.thumbnail} alt="" className="mx-auto w-52" />
                <h3 className="text-lg font-medium text-white">
                  {movie?.title}
                </h3>
                <p>{movie?.genre}</p>
                <p>{movie?.year}</p>
                <br />

                <p>{movie?.synopsis}</p>
                <p>{movie?.actors}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
