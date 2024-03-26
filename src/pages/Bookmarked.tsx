import { Link } from "react-router-dom";
import { mockedData } from "../data/mockedData";

export default function Bookmarked() {
  const bookmarkedIds = JSON.parse(
    localStorage.getItem("bookmarkedMovies") || "[]"
  );
  const bookmarkedMovies = mockedData.filter((movie) =>
    bookmarkedIds.includes(movie.id)
  );

  return (
    <div className="bg-black min-h-screen p-4 text-white">
      <div className="container mx-auto py-8">
        <Link to="/PreviewPage">
          <button className="mb-4 text-black bg-white">
            Tillbaka till förhandsvisning
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bookmarkedMovies.map((movie) => (
            <Link
              to={`/infoPage/${movie.id}`}
              key={movie.id}
              className="no-underline"
            >
              <div className="flex flex-col md:flex-row bg-white rounded overflow-hidden shadow-lg">
                <img
                  className="w-full md:w-1/2 h-auto object-cover"
                  src={movie.thumbnail}
                  alt={movie.title}
                />
                <div className="px-6 py-4 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-xl text-black mb-2">
                      {movie.title}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
