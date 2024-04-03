import { useEffect, useState } from "react";
import { useRating } from "../context/RatingContext";
import { Movie, mockedData } from "../data/mockedData";
const StarList = () => {
  const { rating } = useRating();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const newFilteredMovies = mockedData.filter(
      (movie) => movie.isRating === rating
    );
    setFilteredMovies(newFilteredMovies);
  }, [rating]);

  return (
    <div className="movie-list">
      {filteredMovies.map((movie) => (
        <div key={movie.id} className="movie-thumbnail">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="movie-image"
          />
        </div>
      ))}
    </div>
  );
};

export default StarList;
