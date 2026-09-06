import Image from "next/image"
import { cn } from "@/lib/utils"

interface SetupProps {
    slug: string
    className?: string
}

export function Setup({ slug, className }: SetupProps) {
    return (
        <div>
            <Image
                src={"/grids/" + slug + "/setup.png"}
                alt="Setup Image Desktop"
                width={976}
                height={662}
                loading="eager"
                className={cn("hidden md:block", className)}
            />
            <Image
                src={"/grids/" + slug + "/characters.png"}
                alt="Characters Image Mobile"
                width={504}
                height={277}
                className="block md:hidden"
            />
            <Image
                src={"/grids/" + slug + "/weapons.png"}
                alt="Weapons Image Mobile"
                width={508}
                height={385}
                className="block md:hidden"
            />
            <Image
                src={"/grids/" + slug + "/summons.png"}
                alt="Summons Image Mobile"
                width={470}
                height={500}
                className="block md:hidden"
            />
        </div>
    )
}
