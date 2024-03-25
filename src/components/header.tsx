import { Link } from "react-router-dom";

function Header() {
	return (
		<div
			className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600
        text-white p-4"
		>
			<Link to="/">
				<img
					src="src\images\Streamflix.png"
					alt="Logo"
					className="h-7 w-13 mb-2 sm:mb-0 sm:mr-2"
				/>
			</Link>
			<h1 className="text-lg sm:text-xl">Detta är vår header</h1>{" "}
		</div>
	);
}

export default Header;
