import Link from "next/link"

import { Button } from "@/components/ui/button"

import { ModeToggle } from "@/components/ModeToggle"
import { FontToggle } from "@/components/FontToggle"

import { Home } from "lucide-react"

import { cn } from "@/lib/utils"

export function PageIntro({
    title,
    home,
    className,
}: {
    title: string
    home?: boolean
    className?: string
}) {
    return (
        <div
            className={cn(
                "flex w-full max-w-4xl flex-col items-center justify-center gap-10 pt-10 md:pt-0",
                className
            )}
        >
            <h1 className="text-center text-5xl font-semibold">{title}</h1>

            <div className="flex items-center justify-center gap-10">
                {home && (
                    <Link href={"/"}>
                        <Button variant="ghost" size="icon-lg">
                            <Home className="size-8" />
                        </Button>
                    </Link>
                )}
                <FontToggle />
                <ModeToggle />
            </div>
        </div>
    )
}
