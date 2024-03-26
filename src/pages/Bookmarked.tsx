// import { Link } from "react-router-dom";

// export default function Bookmarked() {
//   return (
//     <div>
//       <Link to={"/PreviewPage"}>
//         <button>PreviewPage</button>
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { mockedData } from "../data/mockedData"; // Assuming this import path is correct

export default function Bookmarked() {
  // Fetch bookmarked IDs from local storage and parse it
  const bookmarkedIds = JSON.parse(
    localStorage.getItem("bookmarkedMovies") || "[]"
  );

  // Filter movies from mockedData based on bookmarked IDs
  const bookmarkedMovies = mockedData.filter((movie) =>
    bookmarkedIds.includes(movie.id)
  );

  return (
    <div className="container mx-auto py-8">
      <Link to={"/PreviewPage"}>
        <button className="mb-4">PreviewPage</button>
      </Link>
      <div className="grid grid-cols-4 gap-4">
        {bookmarkedMovies.map((movie) => (
          <div
            key={movie.id}
            className="max-w-sm rounded overflow-hidden shadow-lg p-4"
          >
            <img className="w-full" src={movie.thumbnail} alt={movie.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{movie.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
