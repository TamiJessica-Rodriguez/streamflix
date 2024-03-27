import { createContext, useContext, useState } from "react";

const BookmarkedContext = createContext<any>(undefined);

export const useBookmarked = () => {
  return useContext(BookmarkedContext);
};

export const BookmarkedContextProvider = ({ children }: any) => {
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
  return (
    <BookmarkedContext.Provider
      value={{ bookmarked, setBookmarked, toggleBookmark }}
    >
      {children}
    </BookmarkedContext.Provider>
  );
};
