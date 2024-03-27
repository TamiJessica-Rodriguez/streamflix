import React, { useEffect, useRef } from "react";
import { mockedData } from "../data/mockedData";

interface InfoPageProps {
  movieId: string; // Lägg till movieId i props
  onCloseModal: () => void;
}

const InfoPage: React.FC<InfoPageProps> = ({ movieId, onCloseModal }) => {
  // Ta emot movieId från props
  const movie = mockedData.find((movie) => movie.id.toString() === movieId);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onCloseModal(); // Anropa funktionen för att stänga modalen som skickades från parent-komponenten
  };

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
