import { ReactNode, createContext, useContext, useState } from "react";

// Definiera en typ för kontextens värde
interface RatingContextType {
  rating: number;
  setRating: (rating: number) => void;
}

// Skapa kontext med en initial dummy implementation
// Det är viktigt att den överensstämmer med RatingContextType
const RatingContext = createContext<RatingContextType | undefined>(undefined);

// Skapa en Provider-komponent
export const RatingProvider = ({ children }: { children: ReactNode }) => {
  const [rating, setRating] = useState<number>(0);

  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  );
};

// Skapa en anpassad hook för att använda kontexten
export const useRating = () => {
  const context = useContext(RatingContext);
  if (context === undefined) {
    throw new Error("useRating must be used within a RatingProvider");
  }
  return context;
};
