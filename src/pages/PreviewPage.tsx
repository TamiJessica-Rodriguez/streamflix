// Fortsättning på PreviewPage.tsx

import React from "react";
import MovieCarousel from "../components/MovieCarousel";
import { mockedData } from "../data/mockedData"; // Justera importvägen efter din katalogstruktur

const PreviewPage: React.FC = () => {
  const trendingMovies = mockedData.filter((movie) => movie.isTrending);

  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto space-y-12">
        <h1 className="text-center text-3xl font-bold mb-8">Filmkaruseller</h1>
        <MovieCarousel movies={mockedData} />
        <MovieCarousel movies={mockedData} />
        {/* Lägg till en titel för den trendande karusellen om du vill */}
        <h2 className="text-center text-2xl font-semibold mb-6">Trending</h2>
        <MovieCarousel movies={trendingMovies} />
        <MovieCarousel movies={mockedData} />
      </div>
    </div>
  );
};

export default PreviewPage;
