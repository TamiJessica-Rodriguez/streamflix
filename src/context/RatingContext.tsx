import { ReactNode, createContext, useContext, useState } from "react";

interface RatingContextType {
  rating: number;
  setRating: (rating: number) => void;
}

const RatingContext = createContext<RatingContextType | undefined>(undefined);

export const RatingProvider = ({ children }: { children: ReactNode }) => {
  const [rating, setRating] = useState<number>(0); // Startvärde för rating

  const value = { rating, setRating };

  return (
    <RatingContext.Provider value={value}>{children}</RatingContext.Provider>
  );
};

// Hook för att använda kontexten
export const useRating = () => {
  const context = useContext(RatingContext);
  if (context === undefined) {
    throw new Error("useRating måste användas inom en RatingProvider");
  }
  return context;
};