import Link from "next/link"
import { FontToggle } from "@/components/FontToggle"

import { BackgroundBeamsWithCollision } from "@/components/aceternity/background-beams-with-collision"
import { CanvasCard } from "@/components/aceternity/CanvasCard"

export default function HomePage() {
	return (
		<BackgroundBeamsWithCollision className="flex-1">
			<div>
				<CanvasCard />
			</div>
		</BackgroundBeamsWithCollision>
	)
}
