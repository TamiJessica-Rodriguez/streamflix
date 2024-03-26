import { useState } from "react";

export default function VideoComponent() {
	const [muted, setMuted] = useState(true);

	const toggleMuted = () => {
		setMuted(!muted);
	};

	return (
		<div className="relative">
			<video
				className="w-full h-full object-cover"
				src="src\video\The Dark Knight.mp4"
				autoPlay
				muted={muted}
				loop
			></video>
			<button
				onClick={toggleMuted}
				className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white text-black rounded-full p-2 focus:outline-none"
			>
				{muted ? "Unmute" : "Mute"}
			</button>
		</div>
	);
}