// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

// function Header() {
// 	return (
// 		<div
// 			className="flex flex-col flex-1 sm:flex-row items-center justify-between bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600
//         text-white"
// 		>
// 			{" "}
// 			<div className=" flex flex-1 sm:mr-4 p-2">
// 				<Link to="/">
// 					<img src="src\images\newlogo.png" alt="Logo" />
// 				</Link>
// 			</div>
// 			{/* Navigation Links */}
// 			<div className="flex-1 flex justify-center font-bold text-black text-xl">
// 				<Link to="/" className="p-2 text-black m-2 hover:text-white">
// 					Home
// 				</Link>
// 				<Link to="/PreviewPage" className="p-2 m-2 hover:text-white">
// 					Preview
// 				</Link>
// 			</div>
// 			<div className="flex flex-1 justify-end text-black  sm:mr-4 p-2">
// 				<Link to="/Bookmarked" className="hover:text-white">
// 					<FontAwesomeIcon icon={faHeart} />
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }

// export default Header;

// import {
//   faStar as emptyStar,
//   faHeart,
//   faStar as fullStar,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react"; // Importera useState för att hantera state
// import { Link } from "react-router-dom";

// function Header() {
//   const [ratingVisible, setRatingVisible] = useState(false); // State för att hantera om betygsdiven ska visas eller inte

//   // Funktion för att toggla visningen av stjärnbetygsdiven
//   const toggleRatingVisibility = () => {
//     setRatingVisible(!ratingVisible);
//   };

//   return (
//     <div
//       className="flex flex-col flex-1 sm:flex-row items-center justify-between bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600
//         text-white"
//     >
//       <div className=" flex flex-1 sm:mr-4 p-2">
//         <Link to="/">
//           <img src="src\images\newlogo.png" alt="Logo" />
//         </Link>
//       </div>
//       {/* Navigation Links */}
//       <div className="flex-1 flex justify-center font-bold text-black text-xl">
//         <Link to="/" className="p-2 text-black m-2 hover:text-white">
//           Home
//         </Link>
//         <Link to="/PreviewPage" className="p-2 m-2 hover:text-white">
//           Preview
//         </Link>
//       </div>
//       <div className="flex flex-1 justify-end items-center text-black sm:mr-4 p-2">
//         {/* Hjärtikon */}
//         <Link to="/Bookmarked" className="hover:text-white">
//           <FontAwesomeIcon icon={faHeart} />
//         </Link>
//         {/* Stjärnikon - lägg till denna bredvid hjärtikon */}
//         <button
//           onClick={toggleRatingVisibility}
//           className="ml-4 hover:text-white"
//         >
//           <FontAwesomeIcon icon={fullStar} />
//         </button>
//       </div>
//       {/* Bedömningspanel som visas när ratingVisible är true */}
//       {ratingVisible && (
//         <div className="absolute top-full right-0 mt-2 bg-white p-4 shadow-lg rounded">
//           {Array.from({ length: 5 }, (_, index) => (
//             <FontAwesomeIcon
//               key={index}
//               icon={emptyStar}
//               className="text-gray-400 hover:text-yellow-500 cursor-pointer"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;

// Importera nödvändiga paket och ikoner
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // State för att hantera visningen av rullgardinsmenyn med stjärnor
  const [ratingVisible, setRatingVisible] = useState(false);

  // Funktion för att toggla rullgardinsmenyn
  const toggleRatingVisibility = () => setRatingVisible(!ratingVisible);

  return (
    <div className="relative flex flex-col flex-1 sm:flex-row items-center justify-between bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-white p-2">
      <div className="flex flex-1 items-center justify-start sm:mr-4">
        <Link to="/">
          <img src="src/images/newlogo.png" alt="Logo" className="h-10" />
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center font-bold text-black text-xl">
        <Link to="/" className="px-2 text-black m-2 hover:text-white">
          Home
        </Link>
        <Link to="/PreviewPage" className="px-2 m-2 hover:text-white">
          Preview
        </Link>
      </div>
      <div className="flex flex-1 justify-end items-center sm:mr-4">
        <Link to="/Bookmarked" className="text-black hover:text-white mr-4">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <button
          onClick={toggleRatingVisibility}
          className="text-black hover:text-white"
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
      {ratingVisible && (
        <div className="absolute top-full right-0 mt-2 bg-white p-4 shadow-lg rounded z-10 flex justify-around w-48">
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className="text-gray-400"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
