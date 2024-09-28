"use client"

import * as React from "react"
import Image from "next/image"

export function Header() {
    return (
        <header className="text-center py-4">
            <div className="flex justify-center">
            <Image src="/android-chrome-512x512.png" alt="logo" width="100" height="100"/>
            </div>
            <h1 className="text-lg font-bold py-2 uppercase">Paroki Kristus Raja Barong Tongkok</h1>
        </header>
    )
}