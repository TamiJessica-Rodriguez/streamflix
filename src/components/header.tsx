import { Link } from "react-router-dom";

function Header() {
	return (
		<div
			className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600
        text-white p-4"
		>
			{" "}
			<div className="flex justify-start items-center sm:mr-4 p-2 pr-0">
				<Link to="/">
					<img
						src="src\images\Streamflix.png"
						alt="Logo"
						className="h-7 w-13 mb-2 sm:mb-0 sm:mr-2"
					/>
				</Link>
			</div>
			<div className="flex flex-grow justify-center sm:justify-center p-2 pl-0 font-bold font-mono text-lg text-black">
				<Link to="/" className="p-2 text-black">
					Home
				</Link>
				<Link to="/PreviewPage" className="p-2">
					Preview
				</Link>
				<Link to="/Bookmarked" className="p-2">
					Favorites
				</Link>
			</div>
		</div>
	);
}

export default Header;
