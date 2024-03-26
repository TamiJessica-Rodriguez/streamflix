import { useState } from "react";
import volumeFullIcon from "../Icons/volumefull.png";
import volumeMutedIcon from "../Icons/volumemuted.png";

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
				className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-black text-white rounded-full p-2 focus:outline-none"
				style={{
					backgroundImage: `url(${muted ? volumeMutedIcon : volumeFullIcon})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "32px",
					height: "32px",
				}}
			>
				<span className="sr-only">{muted ? "Unmute" : "Mute"}</span>
			</button>
		</div>
	);
}
