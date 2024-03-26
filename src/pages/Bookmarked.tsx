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
    <div className="bg-black min-h-screen p-4 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bookmarkedMovies.map((movie: Movie) => (
            <div
              key={movie.id}
              onClick={() => showMovieDetails(movie.id)}
              className="cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                className="w-full h-auto object-cover rounded shadow-lg"
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
          />
        )}
      </div>
    </div>
  );
};

export default Bookmarked;
