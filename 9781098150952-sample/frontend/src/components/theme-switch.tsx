"use client"

import { memo, useCallback } from "react"
import { useTheme } from "next-themes"
import { IconBlur } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

function ThemeSwitchComponent() {
    const { resolvedTheme, setTheme } = useTheme()
    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }, [resolvedTheme, setTheme])
    return (
        <Button
            variant="ghost"
            size="icon"
            className="group/toggle size-8 extend-touch-target rounded-full"
            onClick={toggleTheme}
            suppressHydrationWarning
        >
            <IconBlur
                className="size-5"
                stroke={2}
            />
            <span className="sr-only">
                Theme Switch
            </span>
        </Button>
    )
}

export const ThemeSwitch = memo(ThemeSwitchComponent)