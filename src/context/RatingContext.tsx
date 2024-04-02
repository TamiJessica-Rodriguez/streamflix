import { createContext, useContext, useState } from "react";

const RatingContext = createContext();

export const useRatings = () => useContext(RatingContext);

export const RatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState({}); // Lagrar betyg med filmID som nyckel

  const updateRating = (movieId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [movieId]: rating,
    }));
  };

  return (
    <RatingContext.Provider value={{ ratings, updateRating }}>
      {children}
    </RatingContext.Provider>
  );
};
