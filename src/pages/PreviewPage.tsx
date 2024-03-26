import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieCarousel from "../components/MovieCarousel";
import SearchMovies from "../components/SearchMovies";
import { Movie, mockedData } from "../data/mockedData";

const PreviewPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]); // Use Movie here
  const [isSearchActive, setIsSearchActive] = useState(false);

  const trendingMovies = mockedData.filter((movie) => movie.isTrending);
  const nonTrendingMovies = mockedData.filter((movie) => !movie.isTrending);

  const getRandomMovies = (movies: typeof mockedData, num = 10) => {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  const recommendedMovies = getRandomMovies(nonTrendingMovies);

  // Callback function for search results
  const handleSearchResult = (results: Movie[]) => {
    // Use Movie here
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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import MovieCarousel from "../components/MovieCarousel";
// import SearchMovies from "../components/SearchMovies"; // Ensure this is the correct path
// import { mockedData, movie } from "../data/mockedData";

// const PreviewPage: React.FC = () => {
//   const [searchResults, setSearchResults] = useState<movie[]>([]);
//   const [isSearchActive, setIsSearchActive] = useState(false);

//   const trendingMovies = mockedData.filter((movie) => movie.isTrending);
//   const nonTrendingMovies = mockedData.filter((movie) => !movie.isTrending);

//   const getRandomMovies = (movies: typeof mockedData, num = 10) => {
//     const shuffled = [...movies].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, num);
//   };
//   const recommendedMovies = getRandomMovies(nonTrendingMovies);

//   // Callback function for search results
//   const handleSearchResult = (results: movie[]) => {
//     setSearchResults(results);
//     setIsSearchActive(true);
//   };

//   return (
//     <div className="bg-black text-white py-4 sm:py-8">
//       <div className="container mx-auto space-y-4 sm:space-y-8 px-2 sm:px-4 md:px-8">
//         <SearchMovies movies={mockedData} onSearchResult={handleSearchResult} />
//         {isSearchActive && searchResults.length > 0 && (
//           <div>
//             <h2 className="text-center text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
//               Search Results
//             </h2>
//             <MovieCarousel movies={searchResults} />
//           </div>
//         )}
//         {isSearchActive && searchResults.length === 0 && (
//           <p className="text-center">No movies found.</p>
//         )}
//         {!isSearchActive && (
//           <>
//             <div>
//               <h2 className="text-center text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
//                 Recommended for You
//               </h2>
//               <MovieCarousel movies={recommendedMovies} />
//             </div>
//             <div>
//               <h2 className="text-center text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
//                 Trending Now
//               </h2>
//               <MovieCarousel movies={trendingMovies} />
//             </div>
//             <div>
//               <h2 className="text-center text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
//                 All Movies
//               </h2>
//               <MovieCarousel movies={mockedData} />
//             </div>
//           </>
//         )}
//         <Link to={"/Bookmarked"}>
//           <button className="block mx-auto mt-2 sm:mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
//             BookMarked
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PreviewPage;
