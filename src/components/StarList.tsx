import { useEffect, useState } from "react";
import { useRating } from "../context/RatingContext";
import { Movie, mockedData } from "../data/mockedData";
const StarList = () => {
	const { rating } = useRating();
	const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

	useEffect(() => {
		const newFilteredMovies = mockedData.filter(
			(movie) => movie.isRating === rating
		);
		setFilteredMovies(newFilteredMovies);
	}, [rating]);

	return (
		<div>
			{filteredMovies.map((movie) => (
				<div key={movie.id}>
					<img src={movie.thumbnail} alt={movie.title} />
				</div>
			))}
		</div>
	);
};

export default StarList;
