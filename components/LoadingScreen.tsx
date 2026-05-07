"use client"

import { motion, Variants } from "motion/react"
import { useEffect, useState } from "react"

import Image from "next/image"
import logo from "@/public/logo.webp"

// import useScrollHook from "@/lib/hooks/useScrollHook"

import { Signature } from "@/components/spell/signature"

const FADE_UP: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 1.5 },
    },
}

const BLUR_OUT: Variants = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 0,

        transition: { duration: 1.2, delay: 2.5, ease: "easeInOut" },
    },
}

const DEBUG_NO_ANIMATION: Variants = {
    hidden: {},
    show: {},
}

export function LoadingScreen(): React.ReactElement | null {
    const [load, setLoad] = useState<boolean>(true)
    // const [blockScroll, allowScroll] = useScrollHook()

    useEffect(() => {
        // Scroll to the top
        // window.scrollTo({
        // 	top: 0,
        // 	left: 0,
        // })

        // Disable scrolling
        // blockScroll()

        const timer = setTimeout(() => {
            setLoad(false)

            // Re-enable scrolling
            // allowScroll()
        }, 3600)

        return () => clearTimeout(timer)
    }, [])

    return load ? (
        <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="absolute z-100 flex h-full w-full overflow-hidden bg-background text-primary"
            variants={BLUR_OUT}
        >
            <motion.div
                viewport={{ once: true }}
                className="fixed flex h-full w-full flex-col items-center justify-center gap-8 text-primary md:flex-row"
            >
                <motion.div className="text-center" variants={FADE_UP}>
                    <Signature
                        className="dark:invert-100"
                        text="Dark GBF"
                        fontSize={24}
                        color="#1D1D1F"
                        duration={0.8}
                    />
                </motion.div>
                <motion.div className="text-center" variants={FADE_UP}>
                    <Image src={logo} alt="Logo" loading="eager" />
                </motion.div>
            </motion.div>
        </motion.div>
    ) : null
}
