import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FEATURE_FLAG_RATING_SYSTEM: boolean = true;

export default function MovieRating() {
    const [ratingVisible, setRatingVisible] = useState<boolean>(true);
	const [movieRating, setMovieRating] = useState<number>(0);

    const toggleRatingVisibility = (): void => {
		if (FEATURE_FLAG_RATING_SYSTEM) {
			setRatingVisible(!ratingVisible);
		}
	};

	const handleRating = (index: number): void => {
		// Ange `index` typen explicit som `number`
		if (FEATURE_FLAG_RATING_SYSTEM) {
			setMovieRating(index + 1);
		}
	};


    return(
        {ratingVisible && FEATURE_FLAG_RATING_SYSTEM && (
            <div className="absolute top-full right-0 mt-2 bg-black p-4 shadow-lg rounded z-10 flex justify-around w-48">
                {Array.from({ length: 5 }, (_, index: number) => (
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
