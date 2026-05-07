"use client"

import { useState } from "react"

import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

import Link from "next/link"
import Image from "next/image"

export function Connections() {
    const stack: string[] = [
        "these & more",
        "Next.js",
        "Fumadocs",
        "shadcn/ui",
        "Tailwind",
    ]
    const social: string[] = ["here", "Skreeauk", "skreeauk", "YogGBF", "GBF"]
    const [stackIndex, setStackIndex] = useState<number>(0)
    const [socialIndex, setSocialIndex] = useState<number>(0)
    return (
        <div className="grid h-full w-full grid-cols-2 items-center *:flex *:items-center *:justify-center *:border *:border-muted-foreground md:grid-cols-6">
            <div className="col-span-2 h-40">
                <span className="basis-[80%] text-4xl font-semibold">
                    Built with <br />
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={stack[stackIndex]}
                            initial={{ opacity: 0, y: -10, rotateX: 90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, y: 10, rotateX: 90 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className={cn(
                                "relative inline-block text-4xl font-semibold",
                                stackIndex === 2 && "text-[#00D8FF]",
                                stackIndex === 4 && "text-[#38bdf8]"
                            )}
                        >
                            {stack[stackIndex]}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </div>
            {/* NextJS */}
            <div
                className="h-40 w-full grayscale transition duration-500 hover:grayscale-0 md:h-full"
                onMouseOver={() => setStackIndex(1)}
                onMouseOut={() => setStackIndex(0)}
            >
                <svg
                    className="size-16"
                    viewBox="0 0 256 256"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="fill-black stroke-black stroke-2 dark:fill-white dark:stroke-white"
                        strokeDasharray="0 1"
                        d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                    />
                </svg>
            </div>
            {/* Fumadocs */}
            <div
                className="h-40 w-full grayscale transition duration-500 hover:grayscale-0 md:h-full"
                onMouseOver={() => setStackIndex(2)}
                onMouseOut={() => setStackIndex(0)}
            >
                <Image
                    src="/about/fumadocs.png"
                    alt="Fumadocs"
                    width={256}
                    height={256}
                />
            </div>
            {/* Shadcn/ui */}
            <div
                className="h-40 w-full grayscale transition duration-500 hover:grayscale-0 md:h-full"
                onMouseOver={() => setStackIndex(3)}
                onMouseOut={() => setStackIndex(0)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="size-16"
                >
                    <path fill="none" d="M0 0h256v256H0z" />
                    <path
                        fill="none"
                        className="stroke-black stroke-[5px] dark:stroke-white"
                        d="M208 128l-80 80M192 40L40 192"
                    />
                </svg>
            </div>
            {/* Tailwind */}
            <div
                className="h-40 w-full grayscale transition duration-500 hover:grayscale-0 md:h-full"
                onMouseOver={() => setStackIndex(4)}
                onMouseOut={() => setStackIndex(0)}
            >
                <svg
                    viewBox="0 0 256 154"
                    className="size-16 fill-[#38BDF8]"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                >
                    <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" />
                </svg>
            </div>
            {/* Twitter / X */}
            <Link
                href="https://x.com/Skreeauk"
                target="_blank"
                aria-label="Twitter / X"
                className="h-40 w-full grayscale transition duration-500 hover:grayscale-0 md:h-full"
                onMouseOver={() => setSocialIndex(1)}
                onMouseOut={() => setSocialIndex(0)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-16 fill-black dark:fill-white"
                    fill="none"
                    viewBox="0 0 1200 1227"
                >
                    <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
                </svg>
            </Link>
            {/* Discord */}
            <div
                className="h-40 w-full grayscale transition duration-500 hover:grayscale-0 md:h-full"
                onMouseOver={() => setSocialIndex(2)}
                onMouseOut={() => setSocialIndex(0)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 127.14 96.36"
                    className="size-16 fill-[#5865F2]"
                >
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
            </div>
            {/* Youtube */}
            <Link
                href="https://www.youtube.com/@YogGBF"
                target="_blank"
                aria-label="Youtube"
                className="h-40 w-full grayscale transition duration-500 hover:grayscale-0 md:h-full"
                onMouseOver={() => setSocialIndex(3)}
                onMouseOut={() => setSocialIndex(0)}
            >
                <svg
                    viewBox="0 0 256 180"
                    className="size-16"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                >
                    <path
                        d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                        fill="red"
                    />
                    <path
                        fill="#FFF"
                        d="m102.421 128.06 66.328-38.418-66.328-38.418z"
                    />
                </svg>
            </Link>
            {/* GBF */}
            <Link
                href="https://game.granbluefantasy.jp/#profile/24374266"
                target="_blank"
                aria-label="GBF"
                className="h-40 w-full grayscale transition duration-500 hover:grayscale-0 md:h-full"
                onMouseOver={() => setSocialIndex(4)}
                onMouseOut={() => setSocialIndex(0)}
            >
                <Image
                    src={"/about/crystal.png"}
                    width={64}
                    height={64}
                    alt="GBF"
                />
            </Link>
            <div className="col-span-2 h-40 text-right">
                <span className="basis-[80%] text-4xl font-semibold">
                    Reach me <br />
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={social[socialIndex]}
                            initial={{ opacity: 0, y: -10, rotateX: 90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, y: 10, rotateX: 90 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className={cn(
                                "relative inline-block text-4xl font-semibold",
                                socialIndex === 2 && "text-[#5865F2]",
                                socialIndex === 3 && "text-red-600"
                            )}
                        >
                            @{social[socialIndex]}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </div>
        </div>
    )
}
