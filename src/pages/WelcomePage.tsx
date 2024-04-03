import React from "react";
import { Link } from "react-router-dom";
import VideoComponent from "../components/VideoComponent";

const WelcomePage: React.FC = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
			<VideoComponent />
			<p id="welcome-paragraph" className=" mb-4 mt-3 text-center text-2xl">
				<span style={{ color: "gold", fontWeight: "bold" }}>
					Welcome to our world of entertainment.
				</span>
			</p>
			<div className="p-2">
				<Link to={"/PreviewPage"}>
					<button
						id="enter-button"
						className="relative inline-flex h-12 w-48 items-center justify-center rounded-full font-sans text-xl font-semibold text-black transition-all duration-300 focus:outline-none md:w-64"
					>
						<span id="text-halo" className="z-10">
							Enter
						</span>
						<span className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-purple-800 via-purple-500 to-pink-200 blur-xl transition-all duration-300"></span>
						<span className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-200 to-orange-500 transition-all duration-300"></span>{" "}
						<span className="absolute inset-0 bg-transparent transition-all duration-200 hover:bg-black/50"></span>
						<style>
							{`                  @media (min-width: 640px) {
                        #welcome-paragraph, #enter-button {
                            animation: fadeIn 7s ease-in-out;
                        }
                                .relative:hover #text-halo {
                                    font-weight: bold;
                                    
                                }
                                #enter-button:hover #text-halo {
                                  color: white;
    
                                }
                                @keyframes fadeIn {
                                    0% {
                                        opacity: 0;
                                    }
                                    100% {
                                        opacity: 1;
                                    }
                                }
                            `}
						</style>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default WelcomePage;
