import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRating } from "../context/RatingContext";

const FEATURE_FLAG_RATING_SYSTEM = true;

function Header() {
  const { rating, setRating } = useRating();
  const [ratingVisible, setRatingVisible] = useState(false);
  // const [rating, setRating] = useState(0); // Antag att detta är din globala betygsstatus

  const toggleRatingVisibility = () => {
    if (FEATURE_FLAG_RATING_SYSTEM) {
      setRatingVisible(!ratingVisible);
    }
  };

  // const handleRating = (index: number) => {
  //   if (FEATURE_FLAG_RATING_SYSTEM) {
  //     const newRating = index + 1;
  //     console.log("Uppdaterar rating till:", newRating); // Lägg till denna loggning
  //     setRating(newRating);
  //   }
  // };s

  const handleRating = (index: number) => {
    const newRating = index + 1; // Lägg till 1 för att kompensera för indexstart på 0
    setRating(newRating);
  };

  return (
    <div className="relative flex flex-col flex-1 sm:flex-row items-center justify-between bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-white p-2">
      <div className="flex flex-1 items-center justify-start sm:mr-4">
        <Link to="/">
          <img src="src/images/newlogo.png" alt="Logo" className="h-10" />
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center font-bold text-black text-xl">
        <Link to="/" className="px-2 text-black m-2 hover:text-white">
          Home
        </Link>
        <Link to="/PreviewPage" className="px-2 m-2 hover:text-white">
          Preview
        </Link>
      </div>
      <div className="flex flex-1 justify-end items-center sm:mr-4">
        <Link to="/Bookmarked" className="text-black hover:text-white mr-4">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        {FEATURE_FLAG_RATING_SYSTEM && (
          <button
            onClick={toggleRatingVisibility}
            className="text-black hover:text-white"
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        )}
      </div>
      {ratingVisible && FEATURE_FLAG_RATING_SYSTEM && (
        <div className="absolute top-full right-0 mt-2 bg-black p-4 shadow-lg rounded z-10 flex justify-around w-48">
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
