import Image from "next/image"
import { Metadata } from "next"

import { Connections } from "@/components/Connections"
import { InteractiveCard } from "@/components/aceternity/InteractiveCard"

import { PageIntro } from "@/components/PageIntro"

export const metadata: Metadata = {
    title: "Dark GBF - About",
    description: "What is this?",
}

export default function Page() {
    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 py-6 md:px-0 md:py-12">
            <PageIntro title="About" home={true} />

            <div className="flex flex-col items-center justify-center gap-6 pt-6 md:flex-row md:gap-12 md:pt-0">
                <div className="space-y-4 text-center text-xl text-balance">
                    <p>
                        This is a personal project to learn but at the same time
                        to also share my thoughts about Dark element.
                    </p>
                    <p>
                        Google Docs and Wiki Page is fine but I wanted a bit
                        more flexibility such as more advanced searching and
                        tabs and stuff.
                    </p>
                </div>
                <InteractiveCard className="py-12">
                    <div
                        className="flex w-80 cursor-pointer flex-col items-stretch border-0 md:w-90"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "none",
                            opacity: 1,
                        }}
                    >
                        <div className="flex-1">
                            <div className="relative aspect-3/4 w-full">
                                <Image
                                    loading="eager"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    alt="Profile Card"
                                    src="/about/profilecard.png"
                                    width={675}
                                    height={900}
                                />
                            </div>
                        </div>
                    </div>
                </InteractiveCard>
            </div>

            <Connections />
        </div>
    )
}
