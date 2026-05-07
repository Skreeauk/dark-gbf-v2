"use client"
import React from "react"

import { AnimatePresence, motion } from "motion/react"
import { CanvasRevealEffect } from "./canvas-reveal-effect"

export function CanvasCard({
    title,
    desc,
    icon,
    containerClassName,
    colors,
}: {
    title: string
    desc?: string
    icon: React.ReactNode
    containerClassName?: string
    colors?: [number, number, number][]
}) {
    return (
        <>
            <Card title={title} desc={desc} icon={icon}>
                <CanvasRevealEffect
                    animationSpeed={4}
                    containerClassName={containerClassName}
                    colors={colors}
                />
            </Card>
        </>
    )
}

const Card = ({
    title,
    desc,
    icon,
    children,
}: {
    title: string
    desc?: string
    icon: React.ReactNode
    children?: React.ReactNode
}) => {
    const [hovered, setHovered] = React.useState(false)
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group/canvas-card relative mx-auto flex h-100 w-full max-w-sm items-center justify-center border border-black/20 p-4 dark:border-white/20"
        >
            <Icon className="absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
            <Icon className="absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white" />
            <Icon className="absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 h-full w-full"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 h-full">
                <div className="flex h-full w-full flex-col items-center justify-center gap-8 text-center">
                    <div className="flex basis-1/2 items-end">{icon}</div>
                    <div className="flex flex-1 flex-col items-center gap-4">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="w-3/4 text-sm text-balance">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AceternityIcon = () => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-black group-hover/canvas-card:text-white dark:text-white"
        >
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
                style={{ mixBlendMode: "darken" }}
            />
        </svg>
    )
}

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
            />
        </svg>
    )
}
