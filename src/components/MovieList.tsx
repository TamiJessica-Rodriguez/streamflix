import { useEffect, useState } from "react";
import { useRating } from "../context/RatingContext";
import { Movie, mockedData } from "../data/mockedData";

const MovieList = () => {
  const { rating } = useRating();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Notera: Om rating är 0, visar vi inte längre alla filmer.
    // Justera detta beteende enligt dina behov.
    const filtered =
      rating > 0 ? mockedData.filter((movie) => movie.isRating === rating) : [];

    setFilteredMovies(filtered);
  }, [rating]);

  return (
    <div>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.synopsis}</p>
            {/* Ytterligare detaljer */}
          </div>
        ))
      ) : (
        <p>Inga filmer matchar det valda betyget.</p>
      )}
    </div>
  );
};

export default MovieList;
