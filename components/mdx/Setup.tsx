import Image from "next/image"

interface SetupProps {
    slug: string
}

export function Setup({ slug }: SetupProps) {
    return (
        <div>
            <Image
                src={"/grids/" + slug + "/setup.png"}
                alt="Setup Image Desktop"
                width={976}
                height={662}
                loading="eager"
                className="hidden md:block"
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
