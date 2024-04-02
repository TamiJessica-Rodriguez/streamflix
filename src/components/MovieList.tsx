// import { useEffect, useState } from "react";
// import { useRating } from "../context/RatingContext";
// import { Movie, mockedData } from "../data/mockedData";

// const MovieList = () => {
//   const { rating } = useRating();
//   const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

//   useEffect(() => {
//     console.log("Aktuellt rating från kontexten:", rating);
//     const filtered = mockedData.filter((movie) => movie.isRating === rating);
//     console.log("Filtrerade filmer baserat på betyg:", filtered);
//     setFilteredMovies(filtered);
//   }, [rating]);

//   return (
//     <div>
//       {filteredMovies.length > 0 ? (
//         filteredMovies.map((movie) => (
//           <div key={movie.id}>
//             <h2>{movie.title}</h2>
//             <p>{movie.synopsis}</p>
//           </div>
//         ))
//       ) : (
//         <p>Inga filmer matchar det valda betyget.</p>
//       )}
//     </div>
//   );
// };

// export default MovieList;

import { useEffect, useState } from "react";
import { useRating } from "../context/RatingContext";
import { Movie, mockedData } from "../data/mockedData";
const MovieList = () => {
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

export default MovieList;
