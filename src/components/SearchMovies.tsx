// import React, { useState } from "react";
// import { movie } from "../data/mockedData";

// interface SearchMoviesProps {
//   movies: movie[];
//   onSearchResult: (result: movie[]) => void; // Callback-funktion för att skicka filtrerade resultat till förälderkomponenten
// }

// const SearchMovies: React.FC<SearchMoviesProps> = ({
//   movies,
//   onSearchResult,
// }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     const filteredMovies = movies.filter((movie) =>
//       movie.title.toLowerCase().includes(term.toLowerCase())
//     );

//     onSearchResult(filteredMovies);
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="input input-bordered input-primary w-full max-w-xs"
//         placeholder="Search movies..."
//       />
//     </div>
//   );
// };

// export default SearchMovies;

import React, { ChangeEvent, useState } from "react";
import { movie } from "../data/mockedData"; // Adjust the import path as necessary

interface SearchMoviesProps {
  movies: movie[];
  onSearchResult: (result: movie[]) => void;
}

const SearchMovies: React.FC<SearchMoviesProps> = ({
  movies,
  onSearchResult,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );

    onSearchResult(filteredMovies);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="input input-bordered input-primary w-full max-w-xs text-black"
        placeholder="Search movies..."
      />
    </div>
  );
};

export default SearchMovies;
