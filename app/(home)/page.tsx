import Link from "next/link"
import { FontToggle } from "@/components/FontToggle"

import { BackgroundBeamsWithCollision } from "@/components/aceternity/background-beams-with-collision"
import { CanvasCard } from "@/components/aceternity/CanvasCard"
import { LoadingScreen } from "@/components/LoadingScreen"

export default function HomePage() {
	return (
		<>
			<LoadingScreen />
			<BackgroundBeamsWithCollision className="flex-1">
				<div>
					<CanvasCard />
				</div>
			</BackgroundBeamsWithCollision>
		</>
	)
}
