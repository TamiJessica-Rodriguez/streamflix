import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieCarousel from "../components/MovieCarousel";
import SearchMovies from "../components/SearchMovies"; // Ensure this is the correct path
import { mockedData, movie } from "../data/mockedData";

const PreviewPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<movie[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const trendingMovies = mockedData.filter((movie) => movie.isTrending);
  const nonTrendingMovies = mockedData.filter((movie) => !movie.isTrending);

  
  const getRandomMovies = (movies: typeof mockedData, num = 10) => {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  const recommendedMovies = getRandomMovies(nonTrendingMovies);

  // Callback function for search results
  const handleSearchResult = (results: movie[]) => {
    setSearchResults(results);
    setIsSearchActive(true);
  };

  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto space-y-8 px-4 md:px-8">
        {/* SearchMovies component for handling search functionality */}
        <SearchMovies movies={mockedData} onSearchResult={handleSearchResult} />

        {/* Optionally display search results if there are any and search is active */}
        {isSearchActive && searchResults.length > 0 && (
          <div>
            <h2 className="text-center text-2xl font-semibold mb-4">
              Search Results
            </h2>
            <MovieCarousel movies={searchResults} />
          </div>
        )}

        {/* Display message if search is active but no results are found */}
        {isSearchActive && searchResults.length === 0 && (
          <p className="text-center">No movies found.</p>
        )}

        {/* Original carousels always displayed regardless of search state */}
        <div>
          <h2 className="text-center text-2xl font-semibold mb-4">
            Recommended for You
          </h2>
          <MovieCarousel movies={recommendedMovies} />
        </div>
        <div>
          <h2 className="text-center text-2xl font-semibold mb-4">
            Trending Now
          </h2>
          <MovieCarousel movies={trendingMovies} />
        </div>
        <div>
          <h2 className="text-center text-2xl font-semibold mb-4">
            All Movies
          </h2>
          <MovieCarousel movies={mockedData} />
        </div>

        <Link to={"/Bookmarked"}>
          <button>BookMarked</button>
        </Link>
      </div>
    </div>
  );
};

export default PreviewPage;
