import { Link } from "react-router-dom";

function Header() {
	return (
		<div
			className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600
        text-white p-4"
		>
			{" "}
			<div className="flex items-center sm:mr-4 p-2 pr-0">
				<Link to="/">
					<img
						src="src\images\newlogo.png"
						alt="Logo"
						className="h-8 w-15 mb-2 sm:mb-0 sm:mr-2"
					/>
				</Link>
			</div>
			<div className="flex-grow flex justify-center p-2 pl-0 font-bold font-mono text-black text-xl">
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
			<div
				className="flex items-center justify-end"
				style={{ backgroundColor: "transparent" }}
			>
				{" "}
			</div>
		</div>
	);
}

export default Header;
