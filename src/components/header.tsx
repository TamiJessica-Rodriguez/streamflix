import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div
			className="flex flex-col flex-1 sm:flex-row items-center justify-between bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600
        text-white"
		>
			{" "}
			<div className=" flex flex-1 sm:mr-4 p-2">
				<Link to="/">
					<img src="src\images\newlogo.png" alt="Logo" />
				</Link>
			</div>
			{/* Navigation Links */}
			<div className="flex-1 flex justify-center font-bold text-black text-xl">
				<Link to="/" className="p-2 text-black m-2 hover:text-white">
					Home
				</Link>
				<Link to="/PreviewPage" className="p-2 m-2 hover:text-white">
					Preview
				</Link>
			</div>
			<div className="flex flex-1 justify-end text-black  sm:mr-4 p-2">
				<Link to="/Bookmarked" className="hover:text-white">
					<FontAwesomeIcon icon={faHeart} />
				</Link>
			</div>
		</div>
	);
}

export default Header;
