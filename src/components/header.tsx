import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="flex flex-1 flex-col items-center justify-between bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-white
        sm:flex-row"
    >
      {" "}
      <div className=" flex flex-1 p-2 sm:mr-4">
        <Link to="/">
          <img src="src\images\newlogo.png" alt="Logo" />
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-1 justify-center text-xl font-bold text-black">
        <Link to="/" className="m-2 p-2 text-black hover:text-white">
          Home
        </Link>
        <Link to="/PreviewPage" className="m-2 p-2 hover:text-white">
          Preview
        </Link>
      </div>
      <div className="flex flex-1 justify-end p-2  text-black sm:mr-4">
        <Link to="/Bookmarked" className="hover:text-white">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
