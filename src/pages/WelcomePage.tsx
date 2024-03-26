import React from "react";
import { Link } from "react-router-dom";
import VideoComponent from "../components/VideoComponent";

const WelcomePage: React.FC = () => {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
			<VideoComponent />
			<p className="text-2xl text-center mb-8 mt-3">
				<span style={{ color: "gold", fontWeight: "bold" }}>
					Welcome to our world of entertainment.
				</span>
			</p>
			<div className="p-2">
				<Link to={"/PreviewPage"}>
					<button className="relative inline-flex justify-center items-center w-48 md:w-64 h-12 rounded-full text-black text-xl font-semibold font-sans transition-all duration-300 focus:outline-none">
						<span className="text-halo z-10">Enter</span>
						<span className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-500 to-pink-200 rounded-full filter blur-xl transition-all duration-300 z-0"></span>
						<span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-200 to-orange-500 rounded-full transition-all duration-300 z-0"></span>{" "}
						<span className="absolute inset-0 bg-transparent hover:bg-opacity-50 transition-all duration-200"></span>
						<style>
							{`
                                .relative:hover .text-halo {
                                    font-weight: bold;
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
