import React from "react";
import MovieCarousel from "../components/MovieCarousel";
import { mockedData } from "../data/mockedData";

const PreviewPage: React.FC = () => {
  const trendingMovies = mockedData.filter((movie) => movie.isTrending);
  const nonTrendingMovies = mockedData.filter((movie) => !movie.isTrending);

  // Funktion för att hämta en slumpmässig uppsättning filmer
  const getRandomMovies = (movies: typeof mockedData, num = 10) => {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const recommendedMovies = getRandomMovies(nonTrendingMovies);

  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto space-y-8 px-4 md:px-8">
        {" "}
        {/* Carousel - Rekommended for you */}
        <div>
          <h2 className="text-center text-2xl font-semibold mb-4">
            {" "}
            Rekommended for you
          </h2>
          <MovieCarousel movies={recommendedMovies} />
        </div>
        {/* Carousel - Trending */}
        <div>
          <h2 className="text-center text-2xl font-semibold mb-4"> Trending</h2>
          <MovieCarousel movies={trendingMovies} />
        </div>
        {/* Carousel - Streaming */}
        <h2 className="text-center text-2xl font-semibold mb-4">
          {" "}
          Stream your favourites
        </h2>
        <MovieCarousel movies={mockedData} />
        <MovieCarousel movies={mockedData} />
        <MovieCarousel movies={mockedData} />
        <Link to={"/Bookmarked"}>
          <button>BookMarked</button>
        </Link>
      </div>
    </div>
  );
};

export default PreviewPage;
