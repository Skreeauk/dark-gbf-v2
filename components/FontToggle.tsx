"use client"

/* eslint-disable */

import { useState, useEffect } from "react"
import { useLocalStorage } from "usehooks-ts"

import { Button } from "./ui/button"

import { cn } from "@/lib/utils"

export function FontToggle() {
    const [mounted, setMounted] = useState(false)
    const [uwu, setUwu, removeUwu] = useLocalStorage("uwu", false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)

        uwu
            ? document.documentElement.classList.add("uwu")
            : document.documentElement.classList.remove("uwu")
    }, [])

    if (!mounted) {
        return null
    }

    const toggle = () => {
        uwu
            ? document.documentElement.classList.remove("uwu")
            : document.documentElement.classList.add("uwu")
        setUwu(!uwu)
    }

    return (
        <Button variant="ghost" size="icon" onClick={toggle}>
            <span className={cn("text-lg", uwu && "font-yuruka")}>UwU</span>
        </Button>
    )
}
