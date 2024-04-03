import React, { useEffect, useState } from "react";
import MovieCarousel from "../components/MovieCarousel";
import SearchMovies from "../components/SearchMovies";
import { useBookmarked } from "../context/BookmarkedContext";
import { useRating } from "../context/RatingContext";
import { Movie, mockedData } from "../data/mockedData";

const PreviewPage: React.FC = () => {
  const { bookmarked, toggleBookmark } = useBookmarked();
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { rating } = useRating();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    localStorage.setItem(
      "bookmarkedMovies",
      JSON.stringify(Array.from(bookmarked))
    );
  }, [bookmarked]);

  // Filtering movies
  const trendingMovies = mockedData.filter((movie) => movie.isTrending);
  const nonTrendingMovies = mockedData.filter((movie) => !movie.isTrending);
  const recommendedMovies = nonTrendingMovies.slice(0, 10);

  const handleSearchResult = (results: Movie[]) => {
    setSearchResults(results);
    setIsSearchActive(true);
  };

  useEffect(() => {
    const filtered = mockedData.filter((movie) => movie.starRating === rating);
    setFilteredMovies(filtered);
  }, [rating]);

  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto space-y-8 px-4 md:px-8">
        <SearchMovies movies={mockedData} onSearchResult={handleSearchResult} />

        {isSearchActive && searchResults.length > 0 && (
          <div>
            <h2 className="text-center text-2xl font-semibold mb-4">
              Search Results
            </h2>
            <MovieCarousel
              movies={searchResults}
              bookmarked={bookmarked}
              toggleBookmark={toggleBookmark}
            />
          </div>
        )}

        {isSearchActive && searchResults.length === 0 && (
          <p className="text-center">No movies found.</p>
        )}

        <MovieCarousel
          movies={filteredMovies}
          bookmarked={bookmarked}
          toggleBookmark={toggleBookmark}
        />

        <div>
          <h2 className="text-center text-2xl font-semibold mb-4">
            Recommended for You
          </h2>

          <MovieCarousel
            movies={recommendedMovies}
            bookmarked={bookmarked}
            toggleBookmark={toggleBookmark}
          />
        </div>
        <div>
          <h2 className="text-center text-2xl font-semibold mb-4">
            Trending Now
          </h2>
          <MovieCarousel
            movies={trendingMovies}
            bookmarked={bookmarked}
            toggleBookmark={toggleBookmark}
          />
        </div>
        <div>
          <h2 className="text-center text-2xl font-semibold mb-4">
            All Movies
          </h2>
          <MovieCarousel
            movies={mockedData}
            bookmarked={bookmarked}
            toggleBookmark={toggleBookmark}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
