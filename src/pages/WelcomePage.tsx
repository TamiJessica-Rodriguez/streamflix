import React from "react";
import { Link } from "react-router-dom";
import VideoComponent from "../components/VideoComponent";

const WelcomePage: React.FC = () => {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col justify-center items-center mb-0">
			<VideoComponent />
			<p className="text-2xl text-center mb-3 mt-3 welcome-paragraph">
				<span style={{ color: "gold", fontWeight: "bold" }}>
					Welcome to our world of entertainment.
				</span>
			</p>
			<div className="p-2">
				<Link to={"/PreviewPage"}>
					<button className="relative inline-flex justify-center items-center w-48 md:w-64 h-12 rounded-full text-black text-xl font-semibold font-sans transition-all duration-300 focus:outline-none enter-button mb-0">
						<span className="text-halo z-10">Enter</span>
						<span className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-500 to-pink-200 rounded-full filter blur-xl transition-all duration-300 z-0"></span>
						<span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-200 to-orange-500 rounded-full transition-all duration-300 z-0"></span>{" "}
						<span className="absolute inset-0 bg-transparent hover:bg-opacity-50 transition-all duration-200"></span>
						<style>
							{`                  @media (min-width: 640px) {
                        .welcome-paragraph, .enter-button {
                            animation: fadeIn 7s ease-in-out;
                        }
                                .relative:hover .text-halo {
                                    font-weight: bold;
                                    
                                }
                                .enter-button:hover .text-halo {
                                  color: white;
                              }
                                .welcome-paragraph, .enter-button {
                                    animation: fadeIn 7s ease-in-out;
                                }
                                  
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
