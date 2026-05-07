import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

import { CanvasCard } from "@/components/aceternity/CanvasCard"
import { PageIntro } from "@/components/PageIntro"

export const metadata: Metadata = {
    title: "Dark GBF",
    description: "Guides for Dark Element in Granblue Fantasy",
}

export default function HomePage() {
    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6">
            <PageIntro title="Dark GBF" />
            <div className="my-10 flex flex-col gap-8 *:w-72 lg:flex-row">
                <Link href={"/docs/magna"}>
                    <div className="">
                        <CanvasCard
                            title="Magna / マグナ"
                            desc="Everything in life goes back to the basics"
                            icon={
                                <Image
                                    src={"/icons/celeste.webp"}
                                    width={160}
                                    height={160}
                                    className=""
                                    alt="Magna"
                                />
                            }
                            colors={[
                                [236, 72, 153],
                                [232, 121, 249],
                            ]}
                            containerClassName="bg-background"
                        />
                    </div>
                </Link>
                <Link href={"/docs/primal"}>
                    <div className="">
                        <CanvasCard
                            title="Hades / ハデス"
                            desc="I've been rich and I've been poor. Rich is better"
                            icon={
                                <Image
                                    src={"/icons/hades.webp"}
                                    width={160}
                                    height={160}
                                    className=""
                                    alt="Primal"
                                />
                            }
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            containerClassName="bg-background"
                        />
                    </div>
                </Link>
                <Link href={"/about"}>
                    <div className="">
                        <CanvasCard
                            title="About / 概要"
                            desc="What is this?"
                            icon={
                                <Image
                                    src={"/icons/mommy.webp"}
                                    width={160}
                                    height={160}
                                    className=""
                                    alt="About"
                                />
                            }
                            colors={[
                                [125, 211, 252],
                                [125, 136, 252],
                            ]}
                            containerClassName="bg-background"
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}
