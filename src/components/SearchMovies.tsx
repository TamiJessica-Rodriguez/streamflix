// import React, { ChangeEvent, useState } from "react";
// import { movie } from "../data/mockedData"; // Adjust the import path as necessary

// interface SearchMoviesProps {
//   movies: movie[];
//   onSearchResult: (result: movie[]) => void;
// }

// const SearchMovies: React.FC<SearchMoviesProps> = ({
//   movies,
//   onSearchResult,
// }) => {
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
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
//         className="input input-bordered input-primary w-full max-w-xs text-black"
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
    <div className="flex justify-center p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="input input-bordered w-full max-w-xs md:max-w-md lg:max-w-lg text-black text-lg py-3 px-4 rounded-full focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
        placeholder="Search movies..."
        style={{ maxWidth: "40%" }}
      />
    </div>
  );
};

export default SearchMovies;