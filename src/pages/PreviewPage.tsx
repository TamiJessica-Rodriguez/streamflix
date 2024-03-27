import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCarousel from "../components/MovieCarousel";
import SearchMovies from "../components/SearchMovies";
import { Movie, mockedData } from "../data/mockedData";

const PreviewPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [bookmarked, setBookmarked] = useState<Set<number>>(() => {
    const stored = localStorage.getItem("bookmarkedMovies");
    return new Set(stored ? JSON.parse(stored) : []);
  });

  useEffect(() => {
    localStorage.setItem(
      "bookmarkedMovies",
      JSON.stringify(Array.from(bookmarked))
    );
  }, [bookmarked]);

  const toggleBookmark = (movieId: number) => {
    setBookmarked((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(movieId)) {
        newBookmarks.delete(movieId);
      } else {
        newBookmarks.add(movieId);
      }
      return newBookmarks;
    });
  };

  // Filtering movies
  const trendingMovies = mockedData.filter((movie) => movie.isTrending);
  const nonTrendingMovies = mockedData.filter((movie) => !movie.isTrending);
  const recommendedMovies = nonTrendingMovies.slice(0, 10);

  const handleSearchResult = (results: Movie[]) => {
    setSearchResults(results);
    setIsSearchActive(true);
  };

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

        <Link to="/Bookmarked">
          <button>Bookmarked</button>
        </Link>
      </div>
    </div>
  );
};

export default PreviewPage;
