import { ReactNode, createContext, useContext, useState } from "react";

type BookmarkedContextType = {
  bookmarked: Set<number>;
  setBookmarked: React.Dispatch<React.SetStateAction<Set<number>>>;
  toggleBookmark: (movieId: number) => void;
};

const defaultContextValue: BookmarkedContextType = {
  bookmarked: new Set(),
  setBookmarked: () => {},
  toggleBookmark: () => {},
};

const BookmarkedContext =
  createContext<BookmarkedContextType>(defaultContextValue);
// eslint-disable-next-line react-refresh/only-export-components
export const useBookmarked = () => {
  return useContext(BookmarkedContext);
};

type BookmarkedContextProviderProps = {
  children: ReactNode;
};
export const BookmarkedContextProvider = ({
  children,
}: BookmarkedContextProviderProps) => {
  const [bookmarked, setBookmarked] = useState<Set<number>>(() => {
    const stored = localStorage.getItem("bookmarkedMovies");
    return new Set(stored ? JSON.parse(stored) : []);
  });

  const toggleBookmark = (movieId: number) => {
    setBookmarked((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(movieId)) {
        newBookmarks.delete(movieId);
      } else {
        newBookmarks.add(movieId);
      }
      return newBookmarks;
    });
  };
  const contextValue: BookmarkedContextType = {
    bookmarked,
    setBookmarked,
    toggleBookmark,
  };
  return (
    <BookmarkedContext.Provider value={contextValue}>
      {children}
    </BookmarkedContext.Provider>
  );
};
