import React, { ChangeEvent, useState } from "react";
import { Movie } from "../data/mockedData"; // Note the uppercase M in Movie

interface SearchMoviesProps {
  movies: Movie[]; // Use the corrected name here as well
  onSearchResult: (result: Movie[]) => void; // And here
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
