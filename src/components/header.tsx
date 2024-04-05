import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRating } from "../context/RatingContext";
import NewLogo from "../images/newlogo.png";

const FEATURE_FLAG_RATING_SYSTEM = false;

function Header() {
  const { rating, setRating } = useRating();
  const [ratingVisible, setRatingVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Endast visa stjärnbetyg på PreviewPage
    if (location.pathname === "/PreviewPage") {
      setRatingVisible((prev) => prev);
    } else {
      setRatingVisible(false);
    }
  }, [location]);

  const toggleRatingVisibility = () => {
    if (FEATURE_FLAG_RATING_SYSTEM && location.pathname === "/PreviewPage") {
      setRatingVisible(!ratingVisible);
    }
  };

  const handleRating = (index: number) => {
    const newRating = index + 1;
    setRating(newRating);
  };

  return (
    <div className="relative flex flex-1 flex-col items-center justify-between bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 p-2 text-white sm:flex-row">
      <div className="flex flex-1 items-center justify-start sm:mr-4">
        <Link to="/">
          <img src={NewLogo} alt="Logo" className="h-10 w-auto sm:h-8" />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center text-xl font-bold text-black">
        <Link to="/" className="m-2 px-2 text-black hover:text-white">
          Home
        </Link>
        <Link to="/PreviewPage" className="m-2 px-2 hover:text-white">
          Preview
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end sm:mr-4">
        <Link to="/Bookmarked" className="mr-4 text-black hover:text-white">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        {FEATURE_FLAG_RATING_SYSTEM && location.pathname === "/PreviewPage" && (
          <button
            onClick={toggleRatingVisibility}
            className="text-black hover:text-white"
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        )}
      </div>
      {ratingVisible && (
        <div className="absolute right-0 top-full z-10 mt-2 flex w-48 justify-around rounded bg-black p-4 shadow-lg">
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              onClick={() => handleRating(index)}
              className={`cursor-pointer ${
                index < rating ? "text-yellow-500" : "text-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
