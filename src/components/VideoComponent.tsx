import { useState } from "react";
import volumeFullIcon from "../Icons/volumefull.png";
import volumeMutedIcon from "../Icons/volumemuted.png";

export default function VideoComponent() {
	const [muted, setMuted] = useState(true);

	const toggleMuted = () => {
		setMuted(!muted);
	};

	return (
		<div className="relative -mt-12">
			<video
				className="size-full object-cover"
				src="src\video\The Dark Knight.mp4"
				autoPlay
				muted={muted}
				loop
			></video>
			<button
				onClick={toggleMuted}
				className="absolute right-4 top-4 rounded-full bg-black p-2 text-white focus:outline-none sm:right-8 sm:top-8"
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
