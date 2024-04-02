import { useEffect, useState } from "react";
import { useRating } from "../context/RatingContext";
import { Movie, mockedData } from "../data/mockedData";

const MovieList = () => {
  const { rating } = useRating();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  //   useEffect(() => {
  //     console.log("Aktuellt rating från kontexten:", rating); // Loggar det aktuella rating-värdet
  //     const filtered = mockedData.filter((movie) => movie.isRating === rating);
  //     setFilteredMovies(filtered);
  //   }, [rating]);

  useEffect(() => {
    console.log("Aktuellt rating från kontexten:", rating); // Verifiera att detta loggar korrekt värde
    const filtered = mockedData.filter((movie) => movie.isRating === rating);
    console.log("Filtrerade filmer baserat på betyg:", filtered); // Se vad som faktiskt filtreras
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
