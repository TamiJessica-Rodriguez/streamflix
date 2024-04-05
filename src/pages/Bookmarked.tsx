import React, { useState } from "react";
import { Movie, mockedData } from "../data/mockedData";
import InfoPage from "../pages/InfoPage";

const Bookmarked: React.FC = () => {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const bookmarkedIds: number[] = JSON.parse(
    localStorage.getItem("bookmarkedMovies") || "[]"
  );
  const bookmarkedMovies = mockedData.filter((movie: Movie) =>
    bookmarkedIds.includes(movie.id)
  );

  const showMovieDetails = (id: number) => setSelectedMovieId(id);
  const closeMovieDetails = () => setSelectedMovieId(null);

  return (
    <div className="min-h-screen bg-black p-4 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {bookmarkedMovies.map((movie: Movie) => (
            <div
              key={movie.id}
              onClick={() => showMovieDetails(movie.id)}
              className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            >
              <img
                className="h-auto w-full rounded object-cover shadow-lg"
                src={movie.thumbnail}
                alt={movie.title}
              />
            </div>
          ))}
        </div>

        {selectedMovieId !== null && (
          <InfoPage
            movieId={selectedMovieId.toString()}
            onCloseModal={closeMovieDetails}
            /* ToggleBookMark skickar en tom funktion eftersom funktionen inte är implementerad. Men infopage vill ha toggleBookmark som attribut.*/
            toggleBookmark={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default Bookmarked;
