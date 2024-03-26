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
    <div
      style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}
    >
      <div className="container mx-auto py-8">
        <Link to="/PreviewPage">
          <button style={{ color: "black", backgroundColor: "white" }}>
            PreviewPage
          </button>
        </Link>
        <div className="grid grid-cols-4 gap-4">
          {bookmarkedMovies.map((movie) => (
            <Link
              to={`/info/${movie.id}`}
              key={movie.id}
              className="text-black no-underline"
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                <img
                  className="w-full"
                  src={movie.thumbnail}
                  alt={movie.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{movie.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
