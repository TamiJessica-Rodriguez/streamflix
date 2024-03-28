import React, { ChangeEvent, useState } from "react";
import { Movie } from "../data/mockedData";

interface SearchMoviesProps {
  movies: Movie[];
  onSearchResult: (result: Movie[]) => void;
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
        className="input input-bordered w-full max-w-xs rounded-full px-4 py-3 text-lg text-black focus:ring focus:ring-indigo-300 focus:ring-opacity-50 md:max-w-md lg:max-w-lg"
        placeholder="Search movies..."
        style={{ maxWidth: "40%" }}
      />
    </div>
  );
};

export default SearchMovies;
