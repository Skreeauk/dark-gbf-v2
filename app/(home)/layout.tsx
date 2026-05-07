import { BackgroundBeamsWithCollision } from "@/components/aceternity/background-beams-with-collision"
import { LoadingScreen } from "@/components/LoadingScreen"

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <>
            <LoadingScreen />
            <BackgroundBeamsWithCollision className="flex-1">
                {children}
            </BackgroundBeamsWithCollision>
        </>
    )
}
