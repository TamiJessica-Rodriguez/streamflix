import React from "react";
import { Link, useParams } from "react-router-dom";
import { mockedData } from "../data/mockedData";

const InfoPage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const movie = mockedData.find((m) => m.id.toString() === movieId);

  return (
    <div className="bg-black min-h-screen p-4 md:p-8 text-white flex flex-col md:flex-row items-center md:items-start">
      <Link to="/PreviewPage" className="self-start mb-8">
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded shadow-lg hover:shadow transition duration-150 ease-in-out">
          Back to Preview Page
        </button>
      </Link>
      {movie ? (
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 md:mr-8"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">
              {movie.title} ({movie.year})
            </h1>
            <p className="mb-2">
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p className="mb-2">
              <strong>Rating:</strong> {movie.rating}
            </p>
            <p className="mb-2">
              <strong>Actors:</strong> {movie.actors.join(", ")}
            </p>
            <p className="mb-2">
              <strong>Synopsis:</strong> {movie.synopsis}
            </p>
          </div>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
};

export default InfoPage;
