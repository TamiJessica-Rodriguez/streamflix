import React from "react";

import { Link } from "react-router-dom";
import MovieCarousel from "../components/MovieCarousel";
import { mockedData } from "../data/mockedData";

const PreviewPage: React.FC = () => {
  return (
    <div className="bg-black text-white py-8">
      {" "}
      <div className="container mx-auto space-y-12">
        {" "}
        <h1 className="text-center text-3xl font-bold mb-8">
          Stream your favourites
        </h1>
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
